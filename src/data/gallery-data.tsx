import CustomLink from "@/components/global/custom-link";
import {
	CategoriesType,
	FeatureType,
	ProjectType,
} from "@/types/gallery-types";
import * as mediaData from "@/data/media-data";

export const pageTitle = "Projects";
export const pageSummary = (
	<>
		I love nothing more than bringing my ideas to life&mdash;but sharing
		them with others is a close second.
	</>
);
export const backToProjectsButtonText = "See All Projects";
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
			{
				...categories.illustration,
				primary: true,
			},
			categories.design,
			categories.writing,
			categories.personalWork,
		],
		thumbImage: mediaData.herbalist,
		slideshow: [
			mediaData.ignobleBloodVignettesSpreadBelryanne,
			mediaData.ignobleBloodVignettesSpreadPendrake,
			mediaData.ignobleBloodVignettesSpreadTalis,
			mediaData.ignobleBloodVignettesSpreadAndel,
			mediaData.ignobleBloodVignettesSpreadToval,
			mediaData.ignobleBloodVignettesSpreadKyra,
			mediaData.ignobleBloodVignettesSpreadSamil,
			mediaData.ignobleBloodVignettesSpreadCapor,
			mediaData.ignobleBloodVignettesSpreadCargha,
		],
		summary: `An art book project to showcase the characters and world of my original, in-progress fantasy series, Ignoble Blood.`,
		features: [
			{
				name: "ignoble-blood-vignettes-progress-step-1",
				supertitle: "Step 1",
				title: "The Design Phase",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							In planning this project, it was my goal to showcase
							my design, illustration, and writing talents.
						</p>
						<p>
							I wanted to create a book design that spoke of
							Ignoble Blood&apos;s hard fantasy roots without
							looking overly historical. The Ignoble Blood
							universe is a fictional one, after all.
						</p>
					</>
				),
				image: mediaData.ignobileBloodVignettesPageLayout,
			},
			{
				name: "ignoble-blood-vignettes-progress-step-2",
				supertitle: "Step 2",
				title: "Typography",
				imageAspect: "image",
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
				image: mediaData.ignobleBloodVignettesTypography,
			},
			{
				name: "ignoble-blood-vignettes-progress-step-3",
				supertitle: "Step 3",
				title: "Character Vignettes",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							My intention was to start slow, to create simple
							illustrations whose sole purpose was to showcase
							each character&apos;s unique flavor and design.
						</p>
						<p>
							One of my favorite bonus features of modern video
							games is the ability to view detailed character
							models, and often these models are isolated on a
							sort of cross-sectioned platform. This became my
							inspiration for the format of these character
							vignettes.
						</p>
					</>
				),
				image: mediaData.ignobleBloodVignettesPageCargha,
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
					<i>The Ashes of Hope</i>. In it, a young noble must reckon
					with a dangerous foreign adversary, navigate his fraught
					relationship with his father, and negotiate all the pitfalls
					of growing into a responsible adult&mdash;all while an
					ancient and existential threat looms on the horizon.
				</p>
			</>
		),
		imageGrid: [
			mediaData.herbalist,
			mediaData.ignobleBloodVignettesAndel,
			mediaData.ignobleBloodVignettesCargha,
			mediaData.ignobleBloodVignettesCarghaPortrait,
			mediaData.ignobleBloodVignettesKyra,
			mediaData.ignobleBloodVignettesPendrake,
			mediaData.ignobleBloodVignettesKyraPortrait,
			mediaData.ignobleBloodVignettesSamil,
			mediaData.ignobleBloodVignettesTalis,
			mediaData.ignobleBloodVignettesToval,
			mediaData.ignobleBloodVignettesTovalPortrait,
			mediaData.berned,
			mediaData.becomingRuna,
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
		thumbImage: mediaData.theaterToolkitHowItWorks,
		slideshow: [
			mediaData.theaterToolkitHowItWorks,
			mediaData.theaterToolkitDesignPhase,
			mediaData.theaterToolkitPosIntegration,
		],
		summary: `A simple website solution for independent movie theaters.`,
		problemText: `For indie movie theaters, there aren't many good options for creating a website that syncs with points of sale and allows users to book tickets online quickly and easily on any device. Enter Theater Toolkit, a fledgling software product that needed a strong brand.`,
		solutionText: `In order to help Theater Toolkit stand out from the crowd, I designed an eye-catching website with colorful illustrations. As an added bonus, these illustrations were also used in printed marketing materials.`,
		features: [
			{
				name: "theater-toolkit-progress-step-1",
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
				image: mediaData.theaterToolkitSeamlessUx,
			},
			{
				name: "theater-toolkit-progress-step-2",
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
							aim of highlighting its user-friendliness. Its warm,
							inviting palette is evocative of the colors one
							might see in an actual movie theater.
						</p>
						<p>
							I created simple, uncluttered layouts that would
							draw the user through the site, feeding them
							detailed information about Theater Toolkit while
							keeping a focus on salesmanship.
						</p>
					</>
				),
				image: mediaData.theaterToolkitWebsiteHome,
			},
			{
				name: "theater-toolkit-progress-step-3",
				supertitle: "Marketing the Toolkit",
				title: "Printed Promotional Materials",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							We&apos;d built a brand, and now we needed to market
							it. To that end, I designed business cards, flyers,
							and other collateral to use at tradeshows and other
							marketing events.
						</p>
						<p>
							Leaning into the bold, warm color palette and
							Theater Toolkit&apos;s unique, quirky, and
							illustrative design, I created marketing materials
							that stood out in a crowded space and enticed
							potential clients to learn more about how our
							product could accelerate their business.
						</p>
					</>
				),
				image: mediaData.theaterToolkitLoyaltyAppFlyer,
			},
		],
		descriptionTitle: "Creating an Eye-Catching Brand",
		descriptionBody: (
			<>
				<p className="body-text large">
					After designing the Theater Toolkit website, I then built it
					from the ground up using the Umbraco CMS.
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
					Toolkit website.
				</p>
			</>
		),
		imageGrid: [
			mediaData.theaterToolkitProductionSupport,
			mediaData.theaterToolkitFeatures,
			mediaData.theaterToolkitCheckout,
			mediaData.theaterToolkitSeamlessUx,
			mediaData.theaterToolkitWebsiteHome,
			mediaData.theaterToolkitWebsiteContent,
			mediaData.theaterToolkitWebsiteLanding,
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
		thumbImage: mediaData.visitIrvingScrollingEditorial,
		slideshow: [
			mediaData.visitIrvingScrollingEditorial,
			mediaData.visitIrvingHome,
			mediaData.visitIrvingPreviewSlider,
		],
		summary: `A website to market a very musical Texas tourist destination.`,
		overviewText: (
			<>
				I helped build the Visit Irving website alongside my teammates
				at Simpleview. Following are some curated examples of the work I
				contributed.
			</>
		),
		link: {
			url: "https://www.irvingtexas.com/",
			text: "Visit Website",
		},
		features: [
			{
				name: "visit-irving-progress-step-1",
				supertitle: "A Strong First Impression",
				title: "The Home Page Hero",
				description: (
					<>
						<p className="body-text large">
							I was tasked with building many components of
							Irving&apos;s website, but I am thrilled to have
							been the one who built the scroll-animated home page
							hero.
						</p>
						<p>
							The image grids on either side part like curtains as
							the user scrolls down, revealing an eye-catching
							video which promotes Irving&apos;s various venues,
							amenities, and attractions.
						</p>
					</>
				),
				image: mediaData.visitIrvingHomeHero,
				videoSrc: mediaData.visitIrvingHomeHeroVideo,
			},
			{
				name: "visit-irving-progress-step-2",
				supertitle: "The Only Way Down Is Right",
				title: "The Side-Scrolling Editorial Grid",
				description: (
					<>
						<p className="body-text large">
							One of my favorite aspects about web development is
							that I am often tasked with solving some very
							intesting problems.
						</p>
						<p>
							For that reason, this horizonally scrolling blog
							grid was an absolute joy to build. It consumes the
							screen and pulls you in with its bold typography and
							colorful odes to Irving&apos;s rich and musical
							culture.
						</p>
					</>
				),
				image: mediaData.visitIrvingScrollingEditorial,
				videoSrc: mediaData.visitIrvingScrollingEditorialVideo,
			},
			{
				name: "visit-irving-progress-step-3",
				supertitle: "A Preview of Your Next Vacation",
				title: "The Preview Slideshow",
				description: (
					<>
						<p className="body-text large">
							There is so much to love about the design of this
							website, but this is one of my favorite elements.
						</p>
						<p>
							This screen-spanning slideshow literally captivates
							the user, daring them to scroll past without
							clicking through at least a couple of its gorgeous
							slides. The hover effects are minimal and elegant,
							enticing the user even further.
						</p>
					</>
				),
				image: mediaData.visitIrvingPreviewSlider,
				videoSrc: mediaData.visitIrvingPreviewSliderVideo,
			},
		],
		descriptionTitle: "A Web Developer's Dream",
		descriptionBody: (
			<>
				<p className="body-text large">
					I love making good design come to life, and I am privileged
					to have worked for a company that has delivered so many
					strong designs.
				</p>
				<p>
					<strong>Visit Irving</strong> is just one among a massive
					pile of excellent website designs that I have had the joy of
					helping build. While I did not design the Visit Irving
					website, and while building it was a collaborative effort, I
					am proud of the part I played in making this website a
					reality.
				</p>
			</>
		),
		imageGrid: [
			mediaData.visitIrvingHomeHero,
			mediaData.visitIrvingHome,
			mediaData.visitIrvingScrollingEditorial,
			mediaData.visitIrvingPreviewSlider,
		],
	},
	{
		name: "showplace-cinemas",
		title: "Showplace Cinemas",
		categories: [
			{
				...categories.design,
				primary: true,
			},
			categories.clientWork,
		],
		thumbImage: mediaData.showplaceCinemasHome,
		slideshow: [
			mediaData.showplaceCinemasHome,
			mediaData.showplaceCinemasMovie,
			mediaData.showplaceCinemasMobile,
		],
		summary: `A website design for a one-of-a-kind indie movie theater.`,
		problemText: `Showplace Cinemas was among the first theaters to adopt the Theater Toolkit product. In order to bring them up to speed with the modern web, we were tasked with giving their site a modern makeover.`,
		solutionText: `Showplace Cinemas has more than just movies attracting guests to its venues. I designed a website that focused on their main draw (the theater), while also giving their bowling alley, arcade, and other entertainments the attention they deserved.`,
		features: [
			{
				name: "showplace-cinemas-progress-step-1",
				supertitle: "Design for",
				title: "Mobile First",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							One of the points we emphasized most when selling a
							new client on the Theater Toolkit platform was how
							much web traffic occurs on mobile devices these
							days.
						</p>
						<p>
							Without a strong mobile presence, a site that loads
							quickly, or a design that intuitively guides users
							to make fast bookings, a movie theater&apos;s
							website may as well be a vision board.
						</p>
					</>
				),
				image: mediaData.showplaceCinemasMobile,
			},
			{
				name: "showplace-cinemas-progress-step-2",
				supertitle: "Take a Look Around",
				title: "The Home Page",
				description: (
					<>
						<p className="body-text large">
							When you&apos;re an indie theater rubbing shoulders
							with the big chains, a strong first impression
							isn&apos;t just a perk&mdash;it&apos;s a
							requirement.
						</p>
						<p>
							A slideshow of movies coming soon is the perfect
							thing to put in a hero section to encourage repeat
							business. Just below the fold are all currently
							playing features and their showtimes, so the
							user&apos;s primary concern is just a short scroll
							away.
						</p>
					</>
				),
				image: mediaData.showplaceCinemasHome,
			},
			{
				name: "showplace-cinemas-progress-step-3",
				supertitle: "Get to Know Your",
				title: "Movies in Detail",
				description: (
					<>
						<p className="body-text large">
							Not quite ready to pull the trigger on a ticket
							purchase yet? No problem.
						</p>
						<p>
							The movie detail page has everything you need to
							make your decision: movie synopses and details,
							trailers, and upcoming showtimes.
						</p>
					</>
				),
				image: mediaData.showplaceCinemasMovie,
			},
			{
				name: "showplace-cinemas-progress-step-4",
				supertitle: "A Seamless",
				title: "Checkout Process",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							What good are all those showtimes if you can&apos;t
							make your booking faster than you can finish a movie
							trailer?
						</p>
						<p>
							A simple, intuitive design guides users through the
							ticket purchasing process, so they can get to
							planning the rest of their outing in just minutes.
						</p>
					</>
				),
				image: [
					mediaData.showplaceCinemasSeatSelect,
					mediaData.showplaceCinemasTicketSelect,
					mediaData.showplaceCinemasPayment,
					mediaData.showplaceCinemasReceipt,
				],
			},
		],
		descriptionSupertitle: "Small Theater",
		descriptionTitle: "Big Design",
		descriptionBody: (
			<>
				<p className="body-text large">
					It&apos;s important to make a splash when you&apos;re
					competing with big theater chains like AMC and Harkins.
				</p>
				<p>
					Just because a business is small doesn&apos;t mean it
					can&apos;t be given the luxe treatment. In the world of
					indie movie theaters, design will take you far, and{" "}
					<CustomLink to="/projects/theater-toolkit">
						Theater Toolkit
					</CustomLink>{" "}
					has proven that time and time again.
				</p>
				<p>
					I designed Showplace Cinemas&apos; site with the user&apos;s
					top concerns in mind, allowing them to focus on what drove
					them to the site in the first place while enticing them to
					return for future bookings. Though I gave Showplace&apos;s
					movie theater the bulk of the attention, I also designed
					avenues to funnel users toward their other amenities and
					modes of entertainment.
				</p>
			</>
		),
		imageGrid: [
			mediaData.showplaceCinemasContact,
			mediaData.showplaceCinemasHome,
			mediaData.showplaceCinemasMovie,
			mediaData.showplaceCinemasMenu,
		],
	},
	{
		name: "captive-content",
		title: "Captive Content",
		featured: false,
		categories: [
			{
				...categories.design,
				primary: true,
			},
			categories.development,
			categories.clientWork,
		],
		thumbImage: mediaData.captiveContentHome,
		slideshow: [mediaData.captiveContentHome],
		summary: `A product that bridges the gap between advertisers and captive audiences.`,
		problemText: `All over the world, people are waiting. Waiting for the bus, waiting for an appointment to begin, waiting to connect to a Wi-Fi hotspot. Captive Content is the affordable ad-serving solution for capitalizing on all that waiting potential.`,
		solutionText: `Captive Content's branding needed to visually communicate its fundamental function: serving content, or ads, to a captive audience. Once the challenge of the logo was solved, the website's design was extrapolated from there.`,
		features: [
			{
				name: "captive-content-progress-step-1",
				supertitle: "Step 1",
				title: "A Captivating Logo",
				description: (
					<>
						<p className="body-text large">
							From the initial sketch phase, I envisioned a nested
							box as the Captive Content logo&apos;s focal point.
						</p>
						<p>
							The visual of both containing and releasing this box
							perfectly symbolized, to me, what Captive Content
							was about: holding content for advertisers and
							releasing it to a waiting audience.
						</p>
					</>
				),
				image: [
					mediaData.captiveContentLogo1,
					mediaData.captiveContentLogo2,
					mediaData.captiveContentLogo3,
				],
			},
			{
				name: "captive-content-progress-step-2",
				supertitle: "Step 2",
				title: "A Website",
				description: (
					<>
						<p className="body-text large">
							After the logo and color palette were finalized, my
							vision for the website rapidly fell into place.
						</p>
						<p>
							Using stylized diamonds and arrows, I created simple
							illustrations to depict Captive Content&apos;s core
							concept. My goal was towfold: quickly communicate
							the benefits of the product while avoiding bogging
							the potiential client down in technical details.
						</p>
					</>
				),
				image: mediaData.captiveContentHome,
			},
		],
		descriptionSupertitle: "An Ad Server for a Captive Audience",
		descriptionTitle: "A Website to Captivate Advertisers",
		descriptionBody: (
			<>
				<p className="body-text large">
					After designing the Captive Content website, I built it from
					the ground up using the Umbraco CMS. It was then used to
					advertise the product and gain lucrative business for Desert
					Lab Studio.
				</p>
				<p>
					The site is sadly no longer live, as Captive Content was
					sold following my departure from Desert Lab Studio. Still,
					its simple yet elegant design remains a strong part of my
					portfolio, and a prime example of my diverse talents.
				</p>
			</>
		),
		imageGrid: [
			mediaData.captiveContentHome,
			mediaData.captiveContentLogo1,
			mediaData.captiveContentLogo2,
			mediaData.captiveContentLogo3,
		],
	},
	{
		name: "visit-las-vegas",
		title: "Visit Las Vegas",
		categories: [
			{
				...categories.development,
				primary: true,
			},
			categories.clientWork,
		],
		thumbImage: mediaData.visitLasVegasRestaurants,
		slideshow: [
			mediaData.visitLasVegasRestaurants,
			mediaData.visitLasVegasMarquee,
			mediaData.visitLasVegasHome,
		],
		summary: `A website to market the entertainment capital of the world.`,
		overviewText: (
			<>
				I helped build the Visit Las Vegas website alongside my
				teammates at Simpleview. Following are some curated examples of
				the work I contributed.
			</>
		),
		link: {
			url: "https://www.visitlasvegas.com/",
			text: "Visit Website",
		},
		features: [
			{
				name: "visit-las-vegas-progress-step-1",
				supertitle: "A Very Friendly",
				title: "Takeover",
				description: (
					<>
						<p className="body-text large">
							With a site as large as VLV&apos;s, building a nav
							that is both non-intrusive and easy to use is a
							delicate balance to strike.
						</p>
						<p>
							The header&apos;s middle row has everything a
							visitor will need to see, and hovering over each
							item reveals a more detailed menu.
						</p>
						<p>
							The takeover navigation lends focus to the sitemap
							without overwhelming the user, and invites them to
							engage with other areas of the site.
						</p>
					</>
				),
				image: mediaData.visitLasVegasNav,
				videoSrc: mediaData.visitLasVegasNavVideo,
			},
			{
				name: "visit-las-vegas-progress-step-2",
				supertitle: "Just Keep Sliding",
				title: "Events Slideshow",
				description: (
					<>
						<p className="body-text large">
							What would a visit to Las Vegas be without taking
							advantage of their constant and amazing events?
						</p>
						<p>
							The events slideshow invites the user to browse Las
							Vegas&apos;s hottest events at a glance, and to take
							a deeper dive if more information is needed.
						</p>
					</>
				),
				image: mediaData.visitLasVegasEventsSlider,
				videoSrc: mediaData.visitLasVegasEventsSliderVideo,
			},
			{
				name: "visit-las-vegas-progress-step-3",
				supertitle: "Now Trending",
				title: "The Animated Marquee",
				description: (
					<>
						<p className="body-text large">
							Simpleview&apos;s tailored site designs often
							include small moments of delightful interactivity.
						</p>
						<p>
							These are probably even more fun for me to build
							than they are for the user to interact with. As you
							can imagine, as I come from a background of
							illustration and design, building complex animations
							from scratch is one of my job&apos;s greatest joys.
						</p>
					</>
				),
				image: mediaData.visitLasVegasMarquee,
				videoSrc: mediaData.visitLasVegasMarqueeVideo,
			},
		],
		descriptionSupertitle: `Business on the Back End`,
		descriptionTitle: `Party on the Front End`,
		descriptionBody: (
			<>
				<p className="body-text large">
					As I&apos;ve made abundantly clear, I am hugely motivated by
					strong design.
				</p>
				<p>
					Whether it&apos;s something playful, like{" "}
					<CustomLink to="/projects/theater-toolkit">
						Theater Toolkit
					</CustomLink>
					; bold, like{" "}
					<CustomLink to="/projects/visit-irving">
						Visit Irving
					</CustomLink>
					; or deceptively simple, like{" "}
					<strong>Visit Las Vegas</strong>, I always find something to
					enjoy about building what great designers have dreamed up.
				</p>
				<p>
					I did not design the Visit Las Vegas website, and building
					it was a collaborative effort involving many talented
					developers. I am honored, however, to have been part of that
					effort, and to have made my mark on this one-of-a-kind
					destination.
				</p>
			</>
		),
		imageGrid: [
			mediaData.visitLasVegasHome,
			mediaData.visitLasVegasRestaurants,
			mediaData.visitLasVegasEventsSlider,
			mediaData.visitLasVegasMarquee,
		],
	},
	{
		name: "zarpara-vineyard",
		title: "Zarpara Vineyard",
		categories: [
			{
				...categories.illustration,
				primary: true,
			},
			categories.design,
			categories.clientWork,
		],
		thumbImage: mediaData.zarparaRedBottle,
		slideshow: [
			mediaData.zarparaRedBottle,
			mediaData.zarparaRoseBottle,
			mediaData.zarparaWhiteBottle,
		],
		summary: `A brand refresh for Zarpara Vineyard's wine labels using painterly illustrations.`,
		problemText: `Zarpara Vineyard was in need of a design refresh. They'd lost their previous designer and were searching for another who could evolve their brand.`,
		solutionText: `I designed labels that had a touch of modernity along with some unique background illustrations that would help them stand out in a crowd.`,
		features: [
			{
				name: "zarpara-labels-progress-step-1",
				supertitle: "Red, White, and Rosé",
				title: "The Primary Front Labels",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							Each label had to seem part of a set while also
							illustrating the unique qualities and flavors of the
							wine color they represented.
						</p>
						<p>
							I began with the white label&apos;s illustration,
							whose look and feel would inform the others. I
							decided on an impressionistic style of loose
							brushstrokes and a flat value scale, which gave the
							label a distinct color palette without competing
							with the typography.
						</p>
						<p>
							After the white label&apos;s illustration style was
							established, I moved on to paint the backgrounds for
							the red and ros&eacute; labels. For the red I chose
							hues evocative of a cloudy dawn, and for the
							ros&eacute; a stormy but pleasant pink-and-purple
							palette.
						</p>
					</>
				),
				image: [
					mediaData.zarparaWhiteLabel,
					mediaData.zarparaRedLabel,
					mediaData.zarparaRoseLabel,
				],
			},
			{
				name: "zarpara-labels-progress-step-2",
				supertitle: "Two Sides to Every Bottle",
				title: "The Back Labels",
				description: (
					<>
						<p className="body-text large">
							Each wine variant&apos;s back label has its own
							color combination to match both its flavor profile
							and description.
						</p>
					</>
				),
				image: mediaData.zarparaBackLabels,
			},
			{
				name: "zarpara-labels-progress-step-3",
				supertitle: "Luna de Sangre and Aurora",
				title: "Dessert and Port Wine Labels",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							Some time after creating the red, white, and
							ros&eacute; wine labels, Zarpara reached out to have
							some additional labels designed.
						</p>
						<p>
							These would be for their port and dessert wines:
							Aurora and Luna de Sangre, respectively. I stuck
							with the impressionistic style of the previous
							labels and painted a couple backgrounds I thought
							would capture the essence of these new variants.
						</p>
						<p>
							For the Aurora, a sunrise bursts over a cloud-laden
							mountain. For the Luna de Sangre, a blood moon limns
							the same mountain&apos;s peak in vibrant red hues.
						</p>
					</>
				),
				image: [
					mediaData.zarparaLunaDeSangreLabel,
					mediaData.zarparaAuroraLabel,
				],
			},
		],
		descriptionTitle: `An Illustrative Brand Refresh`,
		descriptionBody: (
			<>
				<p className="body-text large">
					Zarpara&apos;s unique labels allow their brand to shine in a
					crowded market.
				</p>
				<p>
					While many label iterations were pitched, Zarpara was drawn
					to the more illustrative ones. They saw these labels as a
					path forward for their brand that wouldn&apos;t alienate
					their existing customer base by straying too far from where
					they&apos;d come.
				</p>
				<p>
					These labels are still used today, and Zarpara&apos;s
					business continues to thrive.
				</p>
			</>
		),
		imageGrid: [
			mediaData.zarparaAuroraIllustration,
			mediaData.zarparaLunaDeSangreIllustration,
			mediaData.zarparaRedIllustration,
			mediaData.zarparaWhiteIllustration,
			mediaData.zarparaRoseIllustration,
		],
	},
	{
		name: "kingdom-hearts-fan-art",
		title: "Kingdom Hearts Fan Art",
		categories: [
			{
				...categories.illustration,
				primary: true,
			},
			categories.personalWork,
		],
		thumbImage: mediaData.kingdomHearts2,
		slideshow: [mediaData.kingdomHearts1, mediaData.kingdomHearts2],
		summary: `The future doesn't scare me where fears and lies melt away.`,
		overviewText: (
			<>
				I made these twin illustrations in preparation for several
				conventions in 2011. My intent was to compose them in such a way
				that the characters of the first piece would mirror those on the
				right.
			</>
		),
		features: [
			{
				name: "kingdom-hearts-fan-art-progress-step-1",
				supertitle: "Glimpsing Destiny",
				title: "The Future Doesn't Scare Me",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							This piece features Sora, Kairi, and Riku looking
							out at a sunset from the beach on Destiny Island.
						</p>
						<p>
							I filled this piece with small details from the
							Kingdom Hearts games, like star fruit, sea salt ice
							cream, and, of course, keyblades! So. Many.
							Keyblades.
						</p>
					</>
				),
				image: mediaData.kingdomHearts1,
			},
			{
				name: "kingdom-hearts-fan-art-progress-step-2",
				supertitle: "A Dark Mirror",
				title: "Where Fears and Lies Melt Away",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							This companion piece features the Nobodies of the
							characters of the first piece: Roxas, Namine, and
							Riku of Organization XIII.
						</p>
						<p>
							Once again, I filled the background with details
							that fans of the games would recognize. There are
							yet more keyblades, a King Mickey, and even Kingdom
							Hearts itself!
						</p>
					</>
				),
				image: mediaData.kingdomHearts2,
			},
		],
		descriptionTitle: `A Duology of Destiny and Fate`,
		descriptionBody: (
			<>
				<p className="body-text large">
					These pieces were sketched, composed, and painted entirely
					in Corel Painter X using a Wacom Intuos 3 drawing tablet.
				</p>
				<p>
					While it has been many years since I&apos;ve used Corel
					Painter, I appreciated its commitment to emulating physical
					media on a digital canvas. I mainly used the oil pastels, as
					I found them easy to blend with and great for letting the
					underlying texture of the painting surface show through.
				</p>
				<p>
					<strong>
						Kingdom Hearts is owned and copyrighted by Disney and
						Square Enix.
					</strong>
				</p>
			</>
		),
		imageGrid: [mediaData.kingdomHearts1, mediaData.kingdomHearts2],
	},
	{
		name: "figure-studies",
		title: "Figure Studies",
		categories: [
			{
				...categories.illustration,
				primary: true,
			},
			categories.personalWork,
		],
		thumbImage: mediaData.figureStudies,
		slideshow: [
			mediaData.figureStudies5,
			mediaData.figureStudies2,
			mediaData.figureStudies1,
			mediaData.figureStudies3,
		],
		summary: `A curated collection of two years' worth of figure studies.`,
		overviewText: (
			<>
				As mentioned in my <CustomLink to="/cv#resume">CV</CustomLink>,
				a major focus of my college education was drawing the human
				figure. People are still my favorite subject to draw, and I have
				made a regular practice of doing so in recent years.
			</>
		),
		features: [
			{
				name: "figure-studies-progress-step-1",
				supertitle: "Studio Grafit",
				title: "An Invaluable Resource",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							For learning how to draw the human figure, there is
							no substitute for drawing from life.
						</p>
						<p>
							You won&apos;t find a much better alternative,
							though, than{" "}
							<CustomLink to="https://grafitschool.gumroad.com/">
								Studio Grafit&apos;s
							</CustomLink>{" "}
							wonderful photo packs. Filled to the brim with
							excellent reference photos of a diverse set of
							models that are expertly lit, these packs are an
							indispensable resource for those who don&apos;t have
							access to live models, and form the foundation for
							my regular figure studies.
						</p>
					</>
				),
				image: mediaData.figureStudies10,
			},
			{
				name: "figure-studies-progress-step-2",
				supertitle: "The Flexibility of",
				title: "Digital Media",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							For these studies, I draw on an iPad Pro using
							Procreate.
						</p>
						<p>
							For drawing the lines, I prefer to use
							DizzyTara&apos;s{" "}
							<CustomLink to="https://dizzytara.gumroad.com/l/foaDL">
								Oval Sketch 2 brush
							</CustomLink>
							. It has just enough grit to satisfy without being
							too distracting.
						</p>
						<p>
							For painting the figure, I use Max Ulichney&apos;s{" "}
							<CustomLink to="https://maxulichney.gumroad.com/l/watercolormaxpack">
								digital watercolor brushes
							</CustomLink>
							. These brushes are intuitive and easy to use, and
							the results are always fantastic.
						</p>
					</>
				),
				image: mediaData.figureStudies,
			},
		],
		descriptionSupertitle: `The Art of Anatomy`,
		descriptionTitle: `Drawing the Human Figure`,
		descriptionBody: (
			<>
				<p className="body-text large">
					Since I was young enough to hold a pencil, I have been
					drawing characters.
				</p>
				<p>
					The foundation of all character design must be, I believe, a
					strong grasp of the human figure. Even if anatomy is
					stylized, one must have knowledge of what they are
					stylizing.
				</p>
				<p>
					Since characters are what I love to illustrate most, I
					gravitated very quickly to life drawing classes in college.
					There, I soaked up every ounce of knowledge I could about
					human anatomy and how to express it.
				</p>
			</>
		),
		imageGrid: [
			mediaData.figureStudies2,
			mediaData.figureStudies7,
			mediaData.figureStudies10,
			mediaData.figureStudies4,
			mediaData.figureStudies8,
			mediaData.figureStudies5,
			mediaData.figureStudies6,
			mediaData.figureStudies12,
			mediaData.figureStudies9,
			mediaData.figureStudies11,
			mediaData.figureStudies1,
			mediaData.figureStudies3,
		],
	},
	{
		name: "post-autumn",
		title: "Post-Autumn",
		categories: [
			{
				...categories.illustration,
				primary: true,
			},
			categories.writing,
			categories.personalWork,
		],
		thumbImage: mediaData.crow3,
		slideshow: [mediaData.crow3, mediaData.crow4, mediaData.crow2],
		summary: `A uniquely powerful technology arises, along with a uniquely terrifying despot, after a planetary apocalypse.`,
		overviewText: (
			<>
				In 2009, I finished an illustration that was in need of a story.
				A would-be assassin plummets from a skyscraper window, his
				adversary soaring after him, seemingly unconcerned that both are
				falling toward their deaths. I envisioned that the latter was
				somehow immortal, while the former was about to find out that he
				was, too. After asking myself why this would be, reasons gave
				way to narrative, and <i>Post-Autumn</i> was thereby born.
			</>
		),
		features: [
			{
				name: "post-autumn-progress-step-1",
				supertitle: "Designing Crow",
				title: "An Anti-Hero Is Born",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							Crow is the name of the assassin I originally
							envisioned. Though he has gone through many
							iterations since his conception, his core has
							remained the same.
						</p>
						<p>
							<b>Crow is a sociopath</b> who was severely
							traumatized at a young age and, as a result,
							developed a predilection for killing as a coping
							impulse. After his first arrest, he was recognized
							for his unique gifts and given a chance at a life
							that would both indulge and reward his murderous
							tendencies. And so a state-sponsored assassin was
							made.
						</p>
						<p>
							From his home city of Valkyrie, Crow is sent on
							missions across the planet to eradicate threats to
							the global world order. In his storied career he has
							never met an adversary he could not subdue.
						</p>
					</>
				),
				image: mediaData.crow1,
			},
			{
				name: "post-autumn-progress-step-2",
				supertitle: "Deceased Gods",
				title: "The Ravens",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							An unknown element of Crow&apos;s past collides with
							an even more ancient history.
						</p>
						<p>
							Crow shares a connection with the long-dead deities
							known as Ravens. What that connection is, and what
							role these ancient gods have to play in Crow&apos;s
							future, is a mystery that Crow must solve if he is
							to achieve his ultimate destiny.
						</p>
					</>
				),
				image: mediaData.crow3,
			},
			{
				name: "post-autumn-progress-step-3",
				supertitle: "A Bionic Assassin in",
				title: "A Cybernetic Future",
				imageAspect: "image",
				description: (
					<>
						<p className="body-text large">
							Owing to his dangerous profession, Crow often
							suffers grievous injuries&mdash;like the loss of an
							eye.
						</p>
						<p>
							Luckily, he lives in a booming technology age, and
							cybernetic enhancements are commonplace among those
							of his position.
						</p>
						<p>
							What humanity has yet to grasp, however, is what
							ultimate price these technologies will force them to
							pay. Though civilization has never been more
							technologically powerful, it has also never been
							more vulnerable&mdash;or more ignorant of that
							vulnerability.
						</p>
					</>
				),
				image: mediaData.crow4,
			},
		],
		descriptionSupertitle: `An Ages-Old Mystery on`,
		descriptionTitle: `A Seasonless Planet`,
		descriptionBody: (
			<>
				<p className="body-text large">
					For Post-Autumn, I conceived of a world bereft of its
					seasons.
				</p>
				<p>
					Civilization, having severed itself entirely from the
					natural world, finds itself, after a planet-wide cataclysm,
					completely dependent on the very technology that caused its
					downfall.
				</p>
				<p>
					What caused this cataclysm and who is ultimately to blame
					are central mysteries to this world. Before Crow can uncover
					those mysteries, however, he is faced with a new
					threat&mdash;one that promises to finish the job that the
					cataclysm could not.
				</p>
				<p>
					The illustration that inspired the world of Post-Autumn is
					very old (and very bad), at this point, so I won&apos;t be
					sharing it. The world it spawned, however, continues to live
					and grow in my imagination.
				</p>
			</>
		),
		imageGrid: [mediaData.crow2, mediaData.crow3, mediaData.crow4],
	},
];

export const projectsSorted = (() => {
	const featured = [...projects].filter((proj) => proj.featured);
	const other = [...projects].filter((proj) => !proj.featured);

	return [...featured, ...other];
})();

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
		description: <p className="body-text large">{proj.summary}</p>,
		image: proj.thumbImage,
		url: `/projects/${proj.name}`,
		category: proj.categories.find((cat) => cat.primary),
	}),
);
