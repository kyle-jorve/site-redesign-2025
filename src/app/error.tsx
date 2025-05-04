"use client";

import type { Metadata } from "next";
import Error from "@/components/global/error";

export const metadata: Metadata = {
	title: "Error",
};

export default function ErrorPage() {
	return <Error />;
}
