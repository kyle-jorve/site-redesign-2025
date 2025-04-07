import * as homeData from "@/data/home-data";
import { bio } from "@/data/cv-data";
import { featuredProjectsFeatureType } from "@/data/gallery-data";
import HomeHero from "@/components/hero/home-hero";
import FeatureGrid from "@/components/gallery/feature-grid";
import Bio from "@/components/cv/bio";

export default function HomePage() {
	return (
		<>
			<HomeHero
				supertitle={homeData.supertitle}
				title={homeData.title}
				heroImage={homeData.heroImage}
				menuTiles={homeData.menuTiles}
			/>
			<FeatureGrid
				slides={featuredProjectsFeatureType.slice(
					0,
					homeData.featuredLimit,
				)}
				url="/projects/"
			/>
			<Bio {...bio} />
		</>
	);
}
