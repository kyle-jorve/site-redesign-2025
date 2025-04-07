import * as galleryData from "@/data/gallery-data";
import { bio } from "@/data/cv-data";
import InteriorHero from "@/components/hero/interior-hero";
import ProjectGrid from "@/components/gallery/project-grid";
import Bio from "@/components/cv/bio";

export default function ProjectsPage() {
	return (
		<>
			<InteriorHero
				title={galleryData.pageTitle}
				description={galleryData.pageSummary}
			/>
			<ProjectGrid projects={galleryData.projects} />
			<Bio {...bio} />
		</>
	);
}
