"use client";

import { useEffect, useRef } from "react";

export const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
};
