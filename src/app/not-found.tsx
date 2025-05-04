import type { Metadata } from "next";
import NotFound from "@/components/global/not-found";

export const metadata: Metadata = {
	title: "Page Not Found",
};

export default function NotFoundPage() {
	return <NotFound />;
}
