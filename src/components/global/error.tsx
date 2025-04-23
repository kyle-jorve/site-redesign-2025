import { errorPageTitle, errorPageDescription } from "@/data/global-data";
import InteriorHero from "@/components/hero/interior-hero";

export default function Error() {
	return (
		<InteriorHero
			title={errorPageTitle}
			description={
				<p className="body-text large">{errorPageDescription}</p>
			}
		/>
	);
}
