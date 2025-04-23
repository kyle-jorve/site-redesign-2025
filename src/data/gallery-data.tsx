import {
	CategoriesType,
	FeatureType,
	ProjectType,
} from "@/types/gallery-types";

export const pageTitle = "Projects";
export const pageSummary = (
	<>
		I love nothing more than bringing my ideas to life&mdash;but sharing
		them with others is a close second.
	</>
);
export const relatedProjectsTitle = "See Also";
export const relatedProjectsButtonText = "See More";

export const categories: CategoriesType = {
	design: {
		name: "design",
		label: "Design",
	},
	illustration: {
		name: "illustration",
		label: "Illustration",
	},
	development: {
		name: "development",
		label: "Development",
	},
	writing: {
		name: "writing",
		label: "Writing",
	},
	clientWork: {
		name: "client-work",
		label: "Client Work",
	},
	personalWork: {
		name: "personal",
		label: "Personal Work",
	},
} as const;

export const projectFilters: CategoriesType = {
	favorited: {
		name: "favorited",
		label: "Favorited",
	},
	featured: {
		name: "featured",
		label: "Featured",
	},
	...categories,
} as const;

export const projects: ProjectType[] = [
	{
		name: "ignoble-blood-vignettes",
		title: "Ignoble Blood Vignettes",
		featured: true,
		categories: [
			categories.design,
			{
				...categories.illustration,
				primary: true,
			},
			categories.writing,
			categories.personalWork,
		],
		thumbImage: {
			square: {
				name: "ignoble-blood-vignettes-thumb-image-square",
				sources: [
					{
						url: "https://placehold.co/720x480",
						minScreenWidth: 1024,
						width: 720,
						height: 480,
					},
					{
						url: "https://placehold.co/512x410",
						minScreenWidth: 768,
						width: 512,
						height: 410,
					},
				],
				mobileSource: "https://placehold.co/384x427",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 384,
				height: 427,
			},
			long: {
				name: "ignoble-blood-vignettes-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1440x540",
						minScreenWidth: 1024,
						width: 1440,
						height: 540,
					},
					{
						url: "https://placehold.co/1024x471",
						minScreenWidth: 768,
						width: 1024,
						height: 471,
					},
				],
				mobileSource: "https://placehold.co/768x416",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 768,
				height: 416,
			},
			feature: {
				name: "ignoble-blood-vignettes-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 1024,
						width: 540,
						height: 570,
					},
					{
						url: "https://placehold.co/1024x512",
						minScreenWidth: 640,
						width: 1024,
						height: 512,
					},
				],
				mobileSource: "https://placehold.co/640",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 640,
				height: 640,
			},
			small: {
				name: "ignoble-blood-vignettes-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/480x343",
						minScreenWidth: 1024,
						width: 480,
						height: 343,
					},
					{
						url: "https://placehold.co/342x380",
						minScreenWidth: 768,
						width: 342,
						height: 380,
					},
				],
				mobileSource: "https://placehold.co/768x415",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 768,
				height: 415,
			},
		},
		slideshow: [
			{
				name: "ignoble-blood-vignettes-slideshow-image-1",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes slideshow image 1",
				width: 640,
				height: 480,
			},
			{
				name: "ignoble-blood-vignettes-slideshow-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes slideshow image 2",
				width: 640,
				height: 480,
			},
			{
				name: "ignoble-blood-vignettes-slideshow-image-3",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes slideshow image 3",
				width: 640,
				height: 480,
			},
		],
		summary: `An art book project meant to showcase the characters and world of my original, in-progress fantasy series, Ignoble Blood.`,
		progressSteps: [
			{
				name: "ignoble-blood-vignettes-progress-step-1",
				supertitle: "Step 1",
				title: "The Design Phase",
				description: (
					<>
						<p className="body-text large">
							In planning this project, it was my goal to showcase
							both my design and illustrative talents.
						</p>
						<p>
							I wanted to create a page layout that spoke of
							Ignoble Blood&apos;s hard fantasy roots without
							looking overly historical. The Ignoble Blood
							universe is a fictional one, after all.
						</p>
					</>
				),
				image: {
					name: "ignoble-blood-vignettes-progress-image-1",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Ignoble Blood Vignettes progress image 1",
					width: 640,
					height: 480,
				},
			},
			{
				name: "ignoble-blood-vignettes-progress-step-2",
				supertitle: "Step 2",
				title: "Typography",
				description: (
					<>
						<p className="body-text large">
							I experimented with a wide variety of font faces and
							configurations, the goal being to find a combination
							which was less medieval and more modern fantasy.
						</p>
						<p>
							In the end, I landed on something which I believe is
							evocative of both the beauty and brutality of
							Ignoble Blood&apos;s world: a harmony of gothic and
							script type faces.
						</p>
					</>
				),
				image: {
					name: "ignoble-blood-vignettes-progress-image-2",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Ignoble Blood Vignettes progress image 2",
					width: 640,
					height: 480,
				},
			},
			{
				name: "ignoble-blood-vignettes-progress-step-3",
				supertitle: "Step 3",
				title: "Character Vignettes",
				description: (
					<>
						<p className="body-text large">
							My intention was to start slow, to create simple
							illustrations whose sole focus was to showcase each
							character&apos;s unique flavor and design.
						</p>
						<p>
							One of my favorite bonus features of modern video
							games is the ability to view detailed character
							models. Often these models are posed on a sort of
							cross-sectioned platform. This was my inspiration
							for these character vignettes.
						</p>
					</>
				),
				image: {
					name: "ignoble-blood-vignettes-progress-image-3",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Ignoble Blood Vignettes progress image 3",
					width: 640,
					height: 480,
				},
			},
		],
		descriptionTitle: "Illustrating Ignoble Blood",
		descriptionBody: (
			<>
				<p className="body-text large">
					It has long been a dream of mine to create an art book. This
					in-progress book is only the first in a planned series, each
					of which is to be based on a corresponding novel.
				</p>
				<p>
					The first in this series of novels is titled{" "}
					<b>The Ashes of Hope</b>. In it, a young noble must reckon
					with a dangerous foreign adversary, navigate his fraught
					relationship with his father, and navigate all the pitfalls
					of growing into a responsible adult&mdash;all while an
					ancient, much larger threat looms on the horizon.
				</p>
			</>
		),
		imageGrid: [
			{
				name: "ignoble-blood-vignettes-image-grid-image-1",
				sources: [
					{
						url: "https://placehold.co/960x803",
						minScreenWidth: 1440,
						width: 960,
						height: 803,
					},
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 1024,
						width: 720,
						height: 600,
					},
					{
						url: "https://placehold.co/1024x576",
						minScreenWidth: 640,
						width: 1024,
						height: 576,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "ignoble-blood-vignettes-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x1080",
						minScreenWidth: 1440,
						width: 1920,
						height: 1080,
					},
					{
						url: "https://placehold.co/1440x810",
						minScreenWidth: 1024,
						width: 1440,
						height: 810,
					},
					{
						url: "https://placehold.co/512x427",
						minScreenWidth: 640,
						width: 512,
						height: 427,
					},
				],
				mobileSource: "https://placehold.co/320x320",
				alt: "Ignoble Blood Vignettes image grid image 2",
				width: 320,
				height: 320,
			},
			{
				name: "ignoble-blood-vignettes-image-grid-image-3",
				sources: [
					{
						url: "https://placehold.co/960x803",
						minScreenWidth: 1440,
						width: 960,
						height: 803,
					},
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 1024,
						width: 720,
						height: 600,
					},
					{
						url: "https://placehold.co/512x427",
						minScreenWidth: 640,
						width: 512,
						height: 427,
					},
				],
				mobileSource: "https://placehold.co/320x320",
				alt: "Ignoble Blood Vignettes image grid image 3",
				width: 320,
				height: 320,
			},
			{
				name: "ignoble-blood-vignettes-image-grid-image-4",
				sources: [
					{
						url: "https://placehold.co/960x803",
						minScreenWidth: 1440,
						width: 960,
						height: 803,
					},
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 1024,
						width: 720,
						height: 600,
					},
					{
						url: "https://placehold.co/1024x576",
						minScreenWidth: 640,
						width: 1024,
						height: 576,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes image grid image 4",
				width: 640,
				height: 480,
			},
		],
	},
	{
		name: "theater-toolkit",
		title: "Theater Toolkit",
		featured: true,
		categories: [
			{
				...categories.design,
				primary: true,
			},
			categories.development,
			categories.illustration,
			categories.clientWork,
		],
		thumbImage: {
			square: {
				name: "theater-toolkit-thumb-image-square",
				sources: [
					{
						url: "https://placehold.co/720x480",
						minScreenWidth: 1024,
						width: 720,
						height: 480,
					},
					{
						url: "https://placehold.co/512x410",
						minScreenWidth: 768,
						width: 512,
						height: 410,
					},
				],
				mobileSource: "https://placehold.co/384x427",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 670,
				height: 460,
			},
			long: {
				name: "theater-toolkit-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1440x540",
						minScreenWidth: 1024,
						width: 1440,
						height: 540,
					},
					{
						url: "https://placehold.co/1024x471",
						minScreenWidth: 768,
						width: 1024,
						height: 471,
					},
				],
				mobileSource: "https://placehold.co/768x416",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 1356,
				height: 320,
			},
			feature: {
				name: "theater-toolkit-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 1024,
						width: 540,
						height: 570,
					},
					{
						url: "https://placehold.co/1024x512",
						minScreenWidth: 640,
						width: 1024,
						height: 512,
					},
				],
				mobileSource: "https://placehold.co/640",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 640,
				height: 640,
			},
			small: {
				name: "theater-toolkit-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/480x343",
						minScreenWidth: 1024,
						width: 480,
						height: 343,
					},
					{
						url: "https://placehold.co/342x380",
						minScreenWidth: 768,
						width: 342,
						height: 380,
					},
				],
				mobileSource: "https://placehold.co/768x415",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 444,
				height: 320,
			},
		},
		slideshow: [
			{
				name: "theater-toolkit-vignettes-slideshow-image-1",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Theater Toolkit slideshow image 1",
				width: 640,
				height: 480,
			},
			{
				name: "theater-toolkit-vignettes-slideshow-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Theater Toolkit slideshow image 2",
				width: 640,
				height: 480,
			},
			{
				name: "theater-toolkit-vignettes-slideshow-image-3",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Theater Toolkit slideshow image 3",
				width: 640,
				height: 480,
			},
		],
		summary: `A simple website solution for independent movie theaters.`,
		problemText: `For indie movie theaters, there aren't many good options for creating a website that syncs with points of sale and allows users to book tickets quickly and easily on any device.`,
		solutionText: `Theater Toolkit is a simple, affordable website solution that integrates directly with a theater's point of sale, allowing users to browse showtimes and buy tickets with a quick and painless checkout process.`,
		progressSteps: [
			{
				name: "theater-toolkit-progress-step-1",
				supertitle: "Revealing the Toolkit",
				title: "Website Design",
				description: (
					<>
						<p className="body-text large">
							The first step in any software venture is, of
							course, to create a website to advertise your idea.
						</p>
						<p>
							I designed Theater Toolkit&apos;s website with the
							aim of highlighting its user-friendliness and ease
							of use. Its warm, inviting palette is evocative of
							the colors one might see in an actual movie theater.
						</p>
						<p>
							I created simple, uncluttered layouts that would
							draw the user through the site, feeding them
							detailed information about Theater Toolkit while
							keeping a focus on salesmanship.
						</p>
					</>
				),
				image: {
					name: "theater-toolkit-progress-image-1",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Theater Toolkit progress image 1",
					width: 640,
					height: 480,
				},
			},
			{
				name: "theater-toolkit-progress-step-2",
				supertitle: "A Strong Brand Means",
				title: "Illustrations",
				description: (
					<>
						<p className="body-text large">
							When it comes to design, I believe my greatest
							strength is in my background: illustration.
						</p>
						<p>
							I knew that the best way to get Theater Toolkit to
							stand out among the crowd was to distinguish its
							branding as much as possible. And what better way to
							stand out among a crowd than with colorful
							illustrations?
						</p>
					</>
				),
				image: {
					name: "theater-toolkit-progress-image-2",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Theater Toolkit progress image 2",
					width: 640,
					height: 480,
				},
			},
		],
		descriptionSupertitle: "Marketing the Toolkit",
		descriptionTitle: "Creating an Eye-Catching Brand",
		descriptionBody: (
			<>
				<p className="body-text large">
					After designing Theater Toolkit, I then built it from the
					ground up using the Umbraco CMS.
				</p>
				<p>
					The illustrations I created would be used throughout the
					site to highlight Theater Toolkit&apos;s many outstanding
					features. They would also be used in signage at tradeshows
					and in various other marketing materials.
				</p>
				<p>
					Unfortunately, following my departure from Desert Lab
					Studio, these illustrations were removed from the Theater
					Toolkit website. They live now only in my memory...
				</p>
			</>
		),
		imageGrid: [
			{
				name: "theater-toolkit-image-grid-image-1",
				sources: [
					{
						url: "https://placehold.co/960x803",
						minScreenWidth: 1440,
						width: 960,
						height: 803,
					},
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 1024,
						width: 720,
						height: 600,
					},
					{
						url: "https://placehold.co/1024x576",
						minScreenWidth: 640,
						width: 1024,
						height: 576,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Theater Toolkit image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "theater-toolkit-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x1080",
						minScreenWidth: 1440,
						width: 1920,
						height: 1080,
					},
					{
						url: "https://placehold.co/1440x810",
						minScreenWidth: 1024,
						width: 1440,
						height: 810,
					},
					{
						url: "https://placehold.co/512x427",
						minScreenWidth: 640,
						width: 512,
						height: 427,
					},
				],
				mobileSource: "https://placehold.co/320x320",
				alt: "Theater Toolkit image grid image 2",
				width: 640,
				height: 480,
			},
		],
	},
	{
		name: "visit-irving",
		title: "Visit Irving",
		featured: true,
		categories: [
			{
				...categories.development,
				primary: true,
			},
			categories.clientWork,
		],
		thumbImage: {
			square: {
				name: "visit-irving-thumb-image-square",
				sources: [
					{
						url: "https://placehold.co/720x480",
						minScreenWidth: 1024,
						width: 720,
						height: 480,
					},
					{
						url: "https://placehold.co/512x410",
						minScreenWidth: 768,
						width: 512,
						height: 410,
					},
				],
				mobileSource: "https://placehold.co/384x427",
				alt: "a preview of the Visit Irving website",
				width: 670,
				height: 460,
			},
			long: {
				name: "visit-irving-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1440x540",
						minScreenWidth: 1024,
						width: 1440,
						height: 540,
					},
					{
						url: "https://placehold.co/1024x471",
						minScreenWidth: 768,
						width: 1024,
						height: 471,
					},
				],
				mobileSource: "https://placehold.co/768x416",
				alt: "a preview of the Visit Irving website",
				width: 1356,
				height: 320,
			},
			feature: {
				name: "visit-irving-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 1024,
						width: 540,
						height: 570,
					},
					{
						url: "https://placehold.co/1024x512",
						minScreenWidth: 640,
						width: 1024,
						height: 512,
					},
				],
				mobileSource: "https://placehold.co/640",
				alt: "a preview of the Visit Irving website",
				width: 640,
				height: 640,
			},
			small: {
				name: "visit-irving-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/480x343",
						minScreenWidth: 1024,
						width: 480,
						height: 343,
					},
					{
						url: "https://placehold.co/342x380",
						minScreenWidth: 768,
						width: 342,
						height: 380,
					},
				],
				mobileSource: "https://placehold.co/768x415",
				alt: "a preview of the Visit Irving website",
				width: 444,
				height: 320,
			},
		},
		slideshow: [
			{
				name: "visit-irving-slideshow-image-1",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Visit Irving slideshow image 1",
				width: 640,
				height: 480,
			},
			{
				name: "visit-irving-slideshow-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Visit Irving slideshow image 2",
				width: 640,
				height: 480,
			},
			{
				name: "visit-irving-slideshow-image-3",
				sources: [
					{
						url: "https://placehold.co/1920x968",
						minScreenWidth: 1440,
						width: 1920,
						height: 968,
					},
					{
						url: "https://placehold.co/1440x726",
						minScreenWidth: 1024,
						width: 1440,
						height: 726,
					},
					{
						url: "https://placehold.co/1024x516",
						minScreenWidth: 640,
						width: 1024,
						height: 516,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Visit Irving slideshow image 3",
				width: 640,
				height: 480,
			},
		],
		summary: `Some summary text. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck.`,
		problemText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		solutionText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		link: {
			url: "https://www.irvingtexas.com/",
			text: "Visit Website",
		},
		progressSteps: [
			{
				name: "visit-irving-progress-step-1",
				supertitle: "Superheading",
				title: "Progress Step 1",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "visit-irving-progress-image-1",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Visit Irving progress image 1",
					width: 640,
					height: 480,
				},
			},
			{
				name: "visit-irving-progress-step-2",
				supertitle: "Superheading",
				title: "Progress Step 2",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "visit-irving-progress-image-2",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Visit Irving progress image 2",
					width: 640,
					height: 480,
				},
			},
			{
				name: "visit-irving-progress-step-3",
				supertitle: "Superheading",
				title: "Progress Step 3",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "visit-irving-progress-image-3",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 1024,
							width: 540,
							height: 570,
						},
						{
							url: "https://placehold.co/1024x512",
							minScreenWidth: 640,
							width: 1024,
							height: 512,
						},
					],
					mobileSource: "https://placehold.co/640",
					alt: "Visit Irving progress image 3",
					width: 640,
					height: 480,
				},
			},
		],
		descriptionTitle: "Project Description",
		descriptionBody: (
			<>
				<p className="body-text large">
					Eventually, you do plan to have dinosaurs on your dinosaur
					tour, right? You know what? It is beets. I&apos;ve crashed
					into a beet truck. Just my luck, no ice. Yeah, but John, if
					The Pirates of the Caribbean breaks down, the pirates
					don&apos;t eat the tourists.
				</p>
				<p>
					What do they got in there? King Kong? Eventually, you do
					plan to have dinosaurs on your dinosaur tour, right? Hey,
					take a look at the earthlings. Goodbye! Must go faster. Life
					finds a way. We gotta burn the rain forest, dump toxic
					waste, pollute the air, and rip up the OZONE! &apos;Cause
					maybe if we screw up this planet enough, they won&apos;t
					want it anymore!
				</p>
			</>
		),
		imageGrid: [
			{
				name: "visit-irving-image-grid-image-1",
				sources: [
					{
						url: "https://placehold.co/960x803",
						minScreenWidth: 1440,
						width: 960,
						height: 803,
					},
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 1024,
						width: 720,
						height: 600,
					},
					{
						url: "https://placehold.co/1024x576",
						minScreenWidth: 640,
						width: 1024,
						height: 576,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Visit Irving image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "visit-irving-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/1920x1080",
						minScreenWidth: 1440,
						width: 1920,
						height: 1080,
					},
					{
						url: "https://placehold.co/1440x810",
						minScreenWidth: 1024,
						width: 1440,
						height: 810,
					},
					{
						url: "https://placehold.co/512x427",
						minScreenWidth: 640,
						width: 512,
						height: 427,
					},
				],
				mobileSource: "https://placehold.co/320x320",
				alt: "Visit Irving image grid image 2",
				width: 640,
				height: 480,
			},
		],
	},
];

export const projectsByName = (() => {
	const returnObj: {
		[index: string]: ProjectType;
	} = {};

	projects.forEach((proj) => {
		returnObj[proj.name] = proj;
	});

	return returnObj;
})();

export const projectsByCategory = (() => {
	const returnObj: {
		[index: string]: ProjectType[];
	} = {};

	projects.forEach((proj) => {
		const primaryCat =
			proj.categories.find((cat) => cat.primary) || proj.categories[0];

		if (Object.keys(returnObj).includes(primaryCat.name)) {
			returnObj[primaryCat.name].push(proj);
		} else {
			returnObj[primaryCat.name] = [proj];
		}
	});

	return returnObj;
})();

export const featuredProjects: ProjectType[] = projects.filter(
	(proj) => proj.featured,
);

export const featuredProjectsFeatureType: FeatureType[] = featuredProjects.map(
	(proj) => ({
		name: proj.name,
		title: proj.title,
		description: proj.summary,
		image: proj.thumbImage.feature,
		url: `/projects/${proj.name}`,
		category: proj.categories.find((cat) => cat.primary),
	}),
);
