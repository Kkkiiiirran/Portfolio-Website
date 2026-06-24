import { NextResponse } from "next/server";

const HANDLE = "itskkirran";

type RatingPoint = {
  contest: string;
  rating: number;
  date: string;
};

async function fetchCodeforces() {
  const [infoResponse, ratingResponse] = await Promise.all([
    fetch(`https://codeforces.com/api/user.info?handles=${HANDLE}`, {
      next: { revalidate: 60 * 60 * 6 },
    }),
    fetch(`https://codeforces.com/api/user.rating?handle=${HANDLE}`, {
      next: { revalidate: 60 * 60 * 6 },
    }),
  ]);

  if (!infoResponse.ok || !ratingResponse.ok) {
    throw new Error("Codeforces API request failed");
  }

  const info = await infoResponse.json();
  const rating = await ratingResponse.json();

  const user = info.result?.[0];
  const history: RatingPoint[] = (rating.result ?? [])
    .slice(-50)  // Get last 50 contests for chart
    .map((entry: any) => ({
      contest: entry.contestName,
      rating: entry.newRating,
      date: new Date(entry.ratingUpdateTimeSeconds * 1000).toISOString(),
    }));

  return {
    handle: HANDLE,
    rating: user?.rating ?? history.at(-1)?.rating ?? null,
    maxRating: user?.maxRating ?? null,
    rank: user?.rank ?? null,
    profileUrl: `https://codeforces.com/profile/${HANDLE}`,
    history,
  };
}

async function fetchCodeChef() {
  try {
    const response = await fetch(`https://www.codechef.com/users/${HANDLE}`, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("CodeChef request failed");
    }

    const html = await response.text();

    // Extract rating
    let rating = null;
    const ratingPatterns = [
      /Rating[\s\S]{0,200}?(\d{3,4})/i,
      /rating["\s:>]*(\d{3,4})/i,
      /class="[^"]*rating[^"]*"[\s\S]{0,100}?(\d{3,4})/i,
    ];

    for (const pattern of ratingPatterns) {
      const match = html.match(pattern);
      if (match) {
        rating = Number(match[1]);
        break;
      }
    }

    // Try to extract chart data from Highcharts in page
    let history: RatingPoint[] = [];
    const seriesMatch = html.match(/series\s*:\s*\[\s*\{[\s\S]{0,5000}?data\s*:\s*(\[[\s\S]{0,3000}\])/i);
    
    if (seriesMatch?.[1]) {
      try {
        const data = JSON.parse(seriesMatch[1]);
        history = (Array.isArray(data) ? data : [])
          .slice(-50)
          .map((point: any) => ({
            contest: (point?.[0] || "Contest") as string,
            rating: Number(point?.[1] || 0),
            date: point?.[2] ? new Date(point[2]).toISOString() : new Date().toISOString(),
          }));
      } catch (e) {
        // Continue without chart data
      }
    }

    return {
      handle: HANDLE,
      rating,
      maxRating: rating,
      rank: null,
      profileUrl: `https://www.codechef.com/users/${HANDLE}`,
      history,
      note: !history.length ? "CodeChef chart data not available (dynamic content)" : undefined,
    };
  } catch (error) {
    console.error("CodeChef fetch error:", error);
    throw error;
  }
}

async function fetchLeetCode() {
  try {
    const response = await fetch(`https://leetcode.com/u/${HANDLE}/`, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("LeetCode request failed");
    }

    const html = await response.text();

    // Extract contest rating
    let rating = null;
    const ratingPatterns = [
      /Contest Rating[\s\S]{0,150}?(\d+)/i,
      /contest.rating["\s:]*(\d+)/i,
      /"contestRating"\s*:\s*(\d+)/i,
    ];

    for (const pattern of ratingPatterns) {
      const match = html.match(pattern);
      if (match) {
        rating = Number(match[1]);
        break;
      }
    }

    // Try to extract contest history from page
    let history: RatingPoint[] = [];
    
    // Look for contest history in data attributes or scripts
    const contestHistoryMatch = html.match(/"contestHistory"\s*:\s*(\[\s*{[\s\S]{0,5000}?\]\s*})/i);
    if (contestHistoryMatch?.[1]) {
      try {
        const data = JSON.parse(contestHistoryMatch[1]);
        if (Array.isArray(data)) {
          history = data.slice(-50).map((contest: any) => ({
            contest: (contest?.contestName || "Contest") as string,
            rating: Number(contest?.rating || 0),
            date: contest?.date ? new Date(contest.date).toISOString() : new Date().toISOString(),
          }));
        }
      } catch (e) {
        // Continue without chart data
      }
    }

    return {
      handle: HANDLE,
      rating,
      maxRating: rating,
      rank: null,
      profileUrl: `https://leetcode.com/u/${HANDLE}/`,
      history,
      note: !history.length ? "LeetCode contest history requires authentication" : undefined,
    };
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const [codeforces, leetcode, codechef] = await Promise.allSettled([
      fetchCodeforces(),
      fetchLeetCode(),
      fetchCodeChef(),
    ]);

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      platforms: {
        codeforces:
          codeforces.status === "fulfilled"
            ? codeforces.value
            : {
                handle: HANDLE,
                rating: 1295,
                maxRating: 1295,
                rank: null,
                profileUrl: `https://codeforces.com/profile/${HANDLE}`,
                history: [],
                note: "Live Codeforces data unavailable; showing fallback rating.",
              },
        leetcode:
          leetcode.status === "fulfilled"
            ? leetcode.value
            : {
                handle: HANDLE,
                rating: 1890,
                maxRating: 1890,
                rank: null,
                profileUrl: `https://leetcode.com/${HANDLE}/`,
                history: [],
                note: "Live LeetCode data unavailable; showing fallback rating.",
              },
        codechef:
          codechef.status === "fulfilled"
            ? codechef.value
            : {
                handle: HANDLE,
                rating: 885,
                maxRating: 885,
                rank: null,
                profileUrl: `https://www.codechef.com/users/${HANDLE}`,
                history: [],
                note: "Live CodeChef data unavailable; showing fallback rating.",
              },
      },
    });
  } catch (error) {
    console.error("Error in GET /api/coding-ratings:", error);
    // Return fallback data on error
    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        error: "Failed to fetch coding ratings",
        platforms: {
          codeforces: {
            handle: HANDLE,
            rating: 1295,
            maxRating: 1295,
            history: [],
          },
          leetcode: {
            handle: HANDLE,
            rating: 1890,
            maxRating: 1890,
            history: [],
          },
          codechef: {
            handle: HANDLE,
            rating: 885,
            maxRating: 885,
            history: [],
          },
        },
      },
      { status: 200 }
    );
  }
}
