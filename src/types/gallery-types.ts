import { categories } from "@/data/gallery-data";

export type CategoryType = (typeof categories)[keyof typeof categories];
