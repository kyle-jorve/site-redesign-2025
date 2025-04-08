import { projectsByName, projectsByCategory } from "@/data/gallery-data";
import InteriorHero from "@/components/hero/interior-hero";
import ButtonLink from "@/components/global/button-link";
import FavButton from "@/components/gallery/fav-button";
import ProjectSlideshow from "@/components/gallery/project-slideshow";

export type ProjectDetailPageProps = {
	params: Promise<{ projectID: string }>;
};

export default async function ProjectDetailPage({
	params,
}: ProjectDetailPageProps) {
	const { projectID } = await params;
	const data = projectsByName[projectID];
	const primaryCategory =
		data.categories.find((cat) => cat.primary) || data.categories[0];
	const relatedProjects = projectsByCategory[primaryCategory.name].slice(
		0,
		3,
	);
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
		</>
	);
}
