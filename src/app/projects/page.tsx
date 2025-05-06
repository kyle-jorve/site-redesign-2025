import type { Metadata } from "next";
import * as galleryData from "@/data/gallery-data";
import { bio, bioBodyImage } from "@/data/cv-data";
import InteriorHero from "@/components/hero/interior-hero";
import ProjectGrid from "@/components/gallery/project-grid";
import Bio from "@/components/cv/bio";

export const metadata: Metadata = {
	title: "Projects",
};

export default function ProjectsPage() {
	return (
		<>
			<InteriorHero
				title={galleryData.pageTitle}
				description={
					<p className="body-text large">{galleryData.pageSummary}</p>
				}
			/>
			<ProjectGrid projects={galleryData.projectsSorted} />
			<Bio
				{...bio}
				image={bioBodyImage}
			/>
		</>
	);
}
