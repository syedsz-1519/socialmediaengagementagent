import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPercent(val: number): string {
  return `${Math.round(val)}%`;
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat("en-US").format(val);
}
