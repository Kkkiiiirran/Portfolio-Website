"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

type RatingPoint = {
  contest: string;
  rating: number;
  date: string;
};

type Platform = {
  handle: string;
  rating: number | null;
  maxRating: number | null;
  rank: string | number | null;
  profileUrl: string;
  history: RatingPoint[];
  note?: string;
};

type RatingsResponse = {
  platforms: {
    leetcode: Platform;
    codeforces: Platform;
    codechef: Platform;
  };
};

const fallbackData: RatingsResponse = {
  platforms: {
    leetcode: {
      handle: "itskkirran",
      rating: 1890,
      maxRating: 1890,
      rank: null,
      profileUrl: "https://leetcode.com/itskkirran/",
      history: [],
      note: "Loading chart data...",
    },
    codeforces: {
      handle: "itskkirran",
      rating: 1295,
      maxRating: 1295,
      rank: null,
      profileUrl: "https://codeforces.com/profile/itskkirran",
      history: [],
      note: "Loading chart data...",
    },
    codechef: {
      handle: "itskkirran",
      rating: null,
      maxRating: null,
      rank: null,
      profileUrl: "https://www.codechef.com/users/itskkirran",
      history: [],
      note: "Profile linked",
    },
  },
};

const platformLabels = {
  leetcode: "LeetCode",
  codeforces: "Codeforces",
  codechef: "CodeChef",
};

function RatingChart({
  title,
  points,
  color = "#22c55e",
}: {
  title: string;
  points: RatingPoint[];
  color?: string;
}) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const chartPoints = points.slice(-16);

  if (chartPoints.length < 2) {
    return (
      <div className="rounded-xl border border-border bg-card/60 p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-heading font-bold text-text-primary">{title}</h3>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Rating Graph
          </span>
        </div>
        <div className="flex h-44 items-center justify-center rounded-lg border border-border/60 bg-background/40 px-6 text-center text-sm text-text-secondary">
          {title === "LeetCode Rating" && "Chart loading from LeetCode..."}
          {title === "Codeforces Rating" && "No contest history available yet."}
          {title === "CodeChef Rating" && "Chart loading from CodeChef..."}
        </div>
      </div>
    );
  }

  const width = 640;
  const height = 210;
  const padding = 28;
  const minRating = Math.min(...chartPoints.map((point) => point.rating));
  const maxRating = Math.max(...chartPoints.map((point) => point.rating));
  const ratingRange = Math.max(maxRating - minRating, 1);

  const coords = chartPoints.map((point, index) => {
    const x = padding + (index / (chartPoints.length - 1)) * (width - padding * 2);
    const y =
      height -
      padding -
      ((point.rating - minRating) / ratingRange) * (height - padding * 2);
    return { ...point, x, y };
  });

  const path = coords
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const hoveredData = hoveredPoint !== null ? coords[hoveredPoint] : null;

  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div className="mb-4 flex items-center justify-between gap-3 px-1">
        <div>
          <h3 className="font-heading font-bold text-text-primary">{title}</h3>
          <p className="text-xs text-text-secondary">Recent contest rating trend</p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          {chartPoints.at(-1)?.rating}
        </span>
      </div>
      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-52 w-full overflow-visible">
          <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {coords.map((point, index) => (
            <g key={`${point.contest}-${point.date}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={color}
                className="cursor-pointer transition-all hover:r-6"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{
                  r: hoveredPoint === index ? 6 : 4,
                  opacity: hoveredPoint === null || hoveredPoint === index ? 1 : 0.5,
                }}
              >
                <title>{`${point.contest}\n${point.rating} rating\n${new Date(point.date).toLocaleDateString()}`}</title>
              </circle>
            </g>
          ))}
        </svg>
        
        {hoveredData && (
          <div className="absolute left-2 top-2 rounded-lg border border-emerald-400/30 bg-background/95 p-3 backdrop-blur-sm">
            <p className="text-sm font-semibold text-emerald-300">{hoveredData.rating}</p>
            <p className="text-xs text-text-secondary max-w-xs truncate">{hoveredData.contest}</p>
            <p className="text-xs text-text-secondary">
              {new Date(hoveredData.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-text-secondary">
        <span>{chartPoints[0].rating}</span>
        <span className="max-w-xs truncate text-center">{chartPoints[0].contest}</span>
        <span>{chartPoints.at(-1)?.rating}</span>
      </div>
    </div>
  );
}

export default function CompetitiveProgramming() {
  const [data, setData] = useState<RatingsResponse>(fallbackData);

  useEffect(() => {
    let mounted = true;

    fetch("/api/coding-ratings")
      .then((response) => response.json())
      .then((payload: RatingsResponse) => {
        if (mounted) {
          setData(payload);
        }
      })
      .catch(() => {
        if (mounted) {
          setData(fallbackData);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="competitive-programming" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-emerald-300 mb-4">
                Competitive Programming
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Ratings, profiles, and contest progress across LeetCode, Codeforces, and CodeChef.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-6 items-start">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {(Object.entries(data.platforms) as [keyof RatingsResponse["platforms"], Platform][]).map(
                ([key, platform]) => (
                  <motion.a
                    key={key}
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-5 space-y-3 cursor-hover group"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-heading font-bold group-hover:text-emerald-300 transition-colors">
                          {platformLabels[key]}
                        </h3>
                        <p className="text-xs text-text-secondary">@{platform.handle}</p>
                      </div>
                      <ExternalLink size={16} className="text-text-secondary" />
                    </div>
                    <div>
                      <p className="text-3xl font-heading font-bold text-emerald-300">
                        {platform.rating ?? "Profile"}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {platform.maxRating ? `Max rating ${platform.maxRating}` : platform.note ?? "View profile"}
                      </p>
                    </div>
                  </motion.a>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 gap-5">
              <RatingChart title="LeetCode Rating" points={data.platforms.leetcode.history} color="#22c55e" />
              <RatingChart title="Codeforces Rating" points={data.platforms.codeforces.history} color="#16a34a" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
