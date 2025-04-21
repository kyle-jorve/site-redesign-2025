import { pageNotFoundTitle, pageNotFoundDescription } from "@/data/global-data";
import InteriorHero from "@/components/hero/interior-hero";

export default function NotFound() {
	return (
		<InteriorHero
			title={pageNotFoundTitle}
			description={pageNotFoundDescription}
		/>
	);
}
