import {
	projectsByName,
	projectsByCategory,
	relatedProjectsTitle,
	relatedProjectsButtonText,
} from "@/data/gallery-data";
import InteriorHero from "@/components/hero/interior-hero";
import ButtonLink from "@/components/global/button-link";
import FavButton from "@/components/gallery/fav-button";
import ProjectSlideshow from "@/components/gallery/project-slideshow";
import DesignSummarySection from "@/components/gallery/design-summary-section";
import FeatureGrid from "@/components/gallery/feature-grid";
import ProjectDescriptionGrid from "@/components/gallery/project-description-grid";
import ProjectGridInterior from "@/components/gallery/project-grid-interior";

export type ProjectDetailPageProps = {
	params: Promise<{ projectID: string }>;
};

export default async function ProjectDetailPage({
	params,
}: ProjectDetailPageProps) {
	const { projectID } = await params;
	const data = projectsByName[projectID];

	if (!data) return null;

	const primaryCategory =
		data.categories.find((cat) => cat.primary) || data.categories[0];
	const relatedProjects = projectsByCategory[primaryCategory.name].slice(
		0,
		3,
	);
	const categoryUrl = `/projects?categories=[${primaryCategory.name}]`;
	const topBarMarkup = (
		<>
			<ButtonLink
				url="/projects/"
				color="dark"
				type="back"
			>
				Back to Projects
			</ButtonLink>

			<FavButton
				projectID={projectID}
				projectTitle={data.title}
				color="red"
			/>
		</>
	);

	return (
		<>
			<InteriorHero
				title={data.title}
				description={data.summary}
				topBar={topBarMarkup}
				categories={data.categories}
			/>
			<ProjectSlideshow images={data.slideshow} />
			<DesignSummarySection
				problemText={data.problemText}
				solutionText={data.solutionText}
				url={data.link?.url}
				buttonText={data.link?.text}
			/>
			{!!data.progressSteps?.length && (
				<FeatureGrid slides={data.progressSteps} />
			)}
			{!!data.descriptionTitle && !!data.descriptionBody && (
				<ProjectDescriptionGrid
					title={data.descriptionTitle}
					bodyText={data.descriptionBody}
					url={data.link?.url}
					buttonText={data.link?.text}
					images={data.imageGrid}
				/>
			)}
			{!!relatedProjects.length && (
				<ProjectGridInterior
					title={relatedProjectsTitle || "See Also"}
					url={categoryUrl}
					projects={relatedProjects}
					buttonText={relatedProjectsButtonText || "See More"}
				/>
			)}
		</>
	);
}
