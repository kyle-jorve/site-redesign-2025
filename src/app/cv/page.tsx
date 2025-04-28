import * as cvData from "@/data/cv-data";
import { featuredProjects } from "@/data/gallery-data";
import Bio from "@/components/cv/bio";
import Resume from "@/components/cv/resume";
import ProjectGridInterior from "@/components/gallery/project-grid-interior";

export default function CV() {
	return (
		<>
			<Bio
				{...cvData.bio}
				image={cvData.bioHeroImage}
				placement="hero"
				heading="h1"
			/>
			<Resume {...cvData.resume} />
			<ProjectGridInterior
				title={cvData.featuredWorkTitle}
				url={cvData.featuredWorkUrl}
				projects={featuredProjects}
			/>
		</>
	);
}
