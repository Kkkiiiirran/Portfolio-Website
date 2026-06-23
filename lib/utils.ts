import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollTo = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const customEase = [0.22, 1, 0.36, 1] as const;
