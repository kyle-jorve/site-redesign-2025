import type { Metadata } from "next";
import {
	projectsSorted,
	projectsByName,
	backToProjectsButtonText,
	relatedProjectsTitle,
	relatedProjectsButtonText,
} from "@/data/gallery-data";
import NotFound from "@/components/global/not-found";
import InteriorHero from "@/components/hero/interior-hero";
import ButtonLink from "@/components/global/button-link";
import FavButton from "@/components/gallery/fav-button";
import ProjectSlideshow from "@/components/gallery/project-slideshow";
import DesignSummarySection from "@/components/gallery/design-summary-section";
import FeatureGrid from "@/components/gallery/feature-grid";
import ProjectDescriptionGrid from "@/components/gallery/project-description-grid";
import ProjectGridInterior from "@/components/gallery/project-grid-interior";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type ProjectDetailPageProps = {
	params: Promise<{ projectID: string }>;
};

export async function generateMetadata({
	params,
}: ProjectDetailPageProps): Promise<Metadata> {
	const { projectID } = await params;
	const data = projectsByName[projectID];
	const title = data?.title;
	const description = data?.summary;
	const image = data
		? `/images/${data.thumbImage.name}/${data.thumbImage.name}-kyle-jorve-640.jpg`
		: null;
	const returnObj: Metadata = {
		openGraph: {},
	};

	if (title) {
		returnObj.title = title;
		returnObj.openGraph!.title = title;
	}
	if (description) {
		returnObj.description = description;
		returnObj.openGraph!.description = description;
	}
	if (image) {
		returnObj.openGraph!.images = [
			{
				url: image,
			},
		];
	}

	return returnObj;
}

export default async function ProjectDetailPage({
	params,
}: ProjectDetailPageProps) {
	const { projectID } = await params;
	const data = projectsByName[projectID];

	if (!data) return <NotFound />;

	const primaryCategory =
		data.categories.find((cat) => cat.primary) || data.categories[0];
	const relatedProjects = projectsSorted.filter(
		(proj) =>
			proj.categories.some(
				(projCat) => projCat.name === primaryCategory.name,
			) && proj.name !== data.name,
	);
	const topBarMarkup = (
		<>
			<ButtonLink
				url="/projects/"
				color="dark"
				shadowColor="red"
				type="back"
			>
				{backToProjectsButtonText}
			</ButtonLink>

			<FavButton
				projectID={projectID}
				projectTitle={data.title}
				color="dark"
				shadowColor="red"
			/>
		</>
	);
	const categories = data.featured
		? [
				{
					name: "featured",
					label: "Featured",
				},
				...data.categories,
		  ]
		: data.categories;

	return (
		<>
			<InteriorHero
				className={styles.hero}
				title={data.title}
				description={<p className="body-text large">{data.summary}</p>}
				topBar={topBarMarkup}
				categories={categories}
			/>
			<ProjectSlideshow images={data.slideshow} />
			<DesignSummarySection
				problemText={data.problemText}
				solutionText={data.solutionText}
				overviewText={data.overviewText}
				url={data.link?.url}
				buttonText={data.link?.text}
			/>
			{!!data.features?.length && <FeatureGrid slides={data.features} />}
			{!!data.descriptionTitle && !!data.descriptionBody && (
				<ProjectDescriptionGrid
					supertitle={data.descriptionSupertitle}
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
					url="/projects"
					projects={relatedProjects}
					buttonText={relatedProjectsButtonText || "See More"}
				/>
			)}
		</>
	);
}

export async function generateStaticParams() {
	const detailPages = Object.keys(projectsByName);

	return detailPages.map((page) => ({
		projectID: page,
	}));
}
