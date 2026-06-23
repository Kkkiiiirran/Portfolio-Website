"use client";

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollY;
};
