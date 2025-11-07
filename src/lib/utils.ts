import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isObjectWith<T extends Record<string, unknown>>(item: unknown, key: keyof T | string): item is T {
	return !!item && typeof item === "object" && key in item;
}

export function repeat(length: number = 4) {
	return Array.from({ length }, (_, index) => index);
}

export function randomHex(seed: number) {
	let x = seed;
	x = (x ^ (x << 13)) >>> 0;
	x = (x ^ (x >> 17)) >>> 0;
	x = (x ^ (x << 5)) >>> 0;
	const n = x % 0xffffff;
	return "#" + n.toString(16).padStart(6, "0");
}
