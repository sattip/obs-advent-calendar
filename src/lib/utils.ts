import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if a date is in the past
 */
export function isPastDate(date: Date): boolean {
  return date < new Date();
}

/**
 * Check if today's date matches the given date
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Format date to Greek locale
 */
export function formatDateGreek(date: Date): string {
  return new Intl.DateTimeFormat("el-GR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
