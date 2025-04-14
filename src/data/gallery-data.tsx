import {
	CategoriesType,
	FeatureType,
	ProjectType,
} from "@/types/gallery-types";

export const pageTitle = "Projects";
export const pageSummary = "I love to bring my ideas to life.";
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
	...categories,
	featured: {
		name: "featured",
		label: "Featured",
	},
	favorited: {
		name: "favorited",
		label: "Favorited",
	},
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
						url: "https://placehold.co/670x460",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/670x460",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 670,
				height: 460,
			},
			long: {
				name: "ignoble-blood-vignettes-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1356x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/1356x320",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 1356,
				height: 320,
			},
			feature: {
				name: "ignoble-blood-vignettes-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/540x570",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 540,
				height: 570,
			},
			small: {
				name: "ignoble-blood-vignettes-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/444x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/444x320",
				alt: "a preview of an illustration from the in-progress art book Ignoble Blood Vignettes",
				width: 444,
				height: 320,
			},
		},
		slideshow: [
			{
				name: "ignoble-blood-vignettes-slideshow-image-1",
				sources: [
					{
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Ignoble Blood Vignettes slideshow image 3",
				width: 640,
				height: 480,
			},
		],
		summary: `Some summary text. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck.`,
		problemText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		solutionText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		progressSteps: [
			{
				name: "ignoble-blood-vignettes-progress-step-1",
				supertitle: "Superheading",
				title: "Progress Step 1",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "ignoble-blood-vignettes-progress-image-1",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Ignoble Blood Vignettes progress image 1",
					width: 640,
					height: 480,
				},
			},
			{
				name: "ignoble-blood-vignettes-progress-step-2",
				supertitle: "Superheading",
				title: "Progress Step 2",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "ignoble-blood-vignettes-progress-image-2",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Ignoble Blood Vignettes progress image 2",
					width: 640,
					height: 480,
				},
			},
			{
				name: "ignoble-blood-vignettes-progress-step-3",
				supertitle: "Superheading",
				title: "Progress Step 3",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "ignoble-blood-vignettes-progress-image-3",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Ignoble Blood Vignettes progress image 3",
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
				name: "ignoble-blood-vignettes-image-grid-image-1",
				sources: [
					{
						url: "https://placehold.co/712x590",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x512",
				alt: "Ignoble Blood Vignettes image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "ignoble-blood-vignettes-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/720x600",
						minScreenWidth: 640,
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
						url: "https://placehold.co/720x600",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1440x590",
						minScreenWidth: 640,
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
						url: "https://placehold.co/670x460",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/670x460",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 670,
				height: 460,
			},
			long: {
				name: "theater-toolkit-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1356x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/1356x320",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 1356,
				height: 320,
			},
			feature: {
				name: "theater-toolkit-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/540x570",
				alt: "a preview of an illustration from the Theater Toolkit website",
				width: 540,
				height: 570,
			},
			small: {
				name: "theater-toolkit-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/444x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/444x320",
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x480",
				alt: "Theater Toolkit slideshow image 3",
				width: 640,
				height: 480,
			},
		],
		summary: `Some summary text. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck.`,
		problemText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		solutionText: `Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`,
		progressSteps: [
			{
				name: "theater-toolkit-progress-step-1",
				supertitle: "Superheading",
				title: "Progress Step 1",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "theater-toolkit-progress-image-1",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Theater Toolkit progress image 1",
					width: 640,
					height: 480,
				},
			},
			{
				name: "theater-toolkit-progress-step-2",
				supertitle: "Superheading",
				title: "Progress Step 2",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "theater-toolkit-progress-image-2",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Theater Toolkit progress image 2",
					width: 640,
					height: 480,
				},
			},
			{
				name: "theater-toolkit-progress-step-3",
				supertitle: "Superheading",
				title: "Progress Step 3",
				description: `Remind me to thank John for a lovely weekend. Jaguar shark! So tell me - does it really exist? Just my luck, no ice. God help us, we're in the hands of engineers.`,
				image: {
					name: "theater-toolkit-progress-image-3",
					sources: [
						{
							url: "https://placehold.co/540x570",
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
					alt: "Theater Toolkit progress image 3",
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
				name: "theater-toolkit-image-grid-image-1",
				sources: [
					{
						url: "https://placehold.co/712x590",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x512",
				alt: "Theater Toolkit image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "theater-toolkit-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/1440x590",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x480",
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
						url: "https://placehold.co/670x460",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/670x460",
				alt: "a preview of the Visit Irving website",
				width: 670,
				height: 460,
			},
			long: {
				name: "visit-irving-thumb-image-long",
				sources: [
					{
						url: "https://placehold.co/1356x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/1356x320",
				alt: "a preview of the Visit Irving website",
				width: 1356,
				height: 320,
			},
			feature: {
				name: "visit-irving-thumb-image-feature",
				sources: [
					{
						url: "https://placehold.co/540x570",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/540x570",
				alt: "a preview of the Visit Irving website",
				width: 540,
				height: 570,
			},
			small: {
				name: "visit-irving-thumb-image-small",
				sources: [
					{
						url: "https://placehold.co/444x320",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/444x320",
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
						url: "https://placehold.co/1200x604",
						minScreenWidth: 640,
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
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
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
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
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
							minScreenWidth: 640,
						},
					],
					mobileSource: "https://placehold.co/640x480",
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
						url: "https://placehold.co/712x590",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x512",
				alt: "Visit Irving image grid image 1",
				width: 640,
				height: 512,
			},
			{
				name: "visit-irving-image-grid-image-2",
				sources: [
					{
						url: "https://placehold.co/1440x590",
						minScreenWidth: 640,
					},
				],
				mobileSource: "https://placehold.co/640x480",
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
