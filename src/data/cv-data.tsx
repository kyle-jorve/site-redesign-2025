import { socialMedia } from "@/data/global-data";
import { bioImageBody, bioImageHero } from "@/data/media-data";
import { BioType, ResumeType } from "@/types/cv-types";
import { ImageMetaType } from "@/types/global-types";
import CustomLink from "@/components/global/custom-link";

export const featuredWorkTitle = "Featured Work";
export const featuredWorkUrl = "/projects/";

const yearsOfExperience = new Date().getFullYear() - 2015;
export const bio: BioType = {
	title: "About Me",
	body: (
		<>
			<p className="body-text large">
				My name is Kyle Jorve, and it would be fair to say I&apos;m a
				jack of all trades.
			</p>
			<p>
				It would also be fair to say I have too many creative passions.
				It&apos;s hardly a surprise, then, that I&apos;ve had such a
				meandering career path. In 2013, I graduated summa cum laude
				from the University of Arizona with a bachelor&apos;s of fine
				art, emphasis in visual communication. It was there I planted
				the seeds of the{" "}
				<CustomLink
					to={`/projects?categories=${JSON.stringify(["writing"])}`}
				>
					stories I&apos;m presently writing
				</CustomLink>
				.
			</p>
			<p>
				In 2015, I landed my first job as a web designer and developer.
				I quickly fell in love with both disciplines, thus adding to my
				already outsized stack of creative pursuits.
			</p>
			<p>
				Today, I&apos;m a professional web developer and halfway decent
				designer with {yearsOfExperience} years of experience. By day, I
				help build websites for a destination marketing company. By
				night, I keep my other passions alive&mdash;which is to say I
				write lots of nerdy fiction, mostly fantasy and sci-fi.
			</p>
		</>
	),
	url: "/cv#resume",
	buttonText: <>See R&eacute;sum&eacute;</>,
};

export const bioBodyImage: ImageMetaType = bioImageBody;

export const bioHeroImage: ImageMetaType = bioImageHero;

export const resume: ResumeType = {
	title: <>R&eacute;sum&eacute;</>,
	url: socialMedia.email.url,
	buttonText: "Contact Me",
	introduction: {
		title: "Introduction",
		content: (
			<>
				<p>
					I&apos;m a senior frontend developer and engineer with over
					10 years of professional experience in frontend web
					development and engineering. I am extremely passionate about
					implementing strong design and building excellent user
					experiences with an emphasis on accessibility. I am fluent
					in HTML, CSS, and JavaScript, and highly proficient in
					TypeScript, ReactJS, and NextJS.
				</p>
				<h4>Career Highlights</h4>
				<ul>
					<li>
						Led design and frontend development and engineering
						initiatives, and created a full suite of branding and
						marketing materials for software product{" "}
						<CustomLink to="/projects/theater-toolkit">
							Theater Toolkit
						</CustomLink>
					</li>
					<li>
						Completed over{" "}
						<CustomLink to={socialMedia.github.url}>
							200 merged pull requests
						</CustomLink>{" "}
						to Simpleview&apos;s foundational code repositories,
						becoming the Operations department&apos;s top
						contributor on GitHub and reducing development time
						across client projects by up to 50%
					</li>
					<li>
						Championed accessibility across all Simpleview web
						projects, ensuring compliance with WCAG standards and
						enhancing overall usability
					</li>
					<li>
						Mentored junior employees in frontend development, web
						accessibility, source control, coding best practices,
						web and graphic design, and user experience design via
						regular peer reviews and one-on-one coaching sessions
					</li>
					<li>
						Learned how to code on the job at Desert Lab Studio and
						was promoted twice for demonstrating quick learning
						ability and high proficiency
					</li>
				</ul>
			</>
		),
	},
	sections: [
		{
			name: "projects",
			title: "Projects",
			items: [
				{
					name: "simpleview-base-client",
					title: "Simpleview Base Client",
					year: "February 2021 - Present",
					description: (
						<ul>
							<li>
								Completed over{" "}
								<CustomLink to={socialMedia.github.url}>
									200 pull requests
								</CustomLink>{" "}
								to Simpleview&apos;s base client repositories,
								which are used as foundational code for every
								Simpleview client website project, reducing
								overall development time by up to 50%
							</li>
							<li>
								Reviewed and revised code across all
								repositories for maximum performance and
								scalability, raising loading performance and
								speed across all client projects by 30%
							</li>
							<li>
								Led initiatives to modernize legacy code,
								optimize loading performance, and ensure
								compliance with web accessibility standards
							</li>
						</ul>
					),
				},
				{
					name: "destination-design-kit",
					title: "Destination Design Kit",
					year: "August 2024",
					description: (
						<ul>
							<li>
								Completed{" "}
								<CustomLink to={socialMedia.github.url}>
									72 merged pull requests
								</CustomLink>{" "}
								to Destination Design Kit (DDK),
								Simpleview&apos;s proprietary React component
								library
							</li>
							<li>
								DDK was heavily researched for user experience
								and accessibility, and built for scalability
								with atomic design principles using Storybook,
								TypeScript, and Jest for unit testing
							</li>
						</ul>
					),
				},
				{
					name: "theater-toolkit",
					title: "Theater Toolkit",
					year: "June 2016 - February 2021",
					description: (
						<ul>
							<li>
								Designed, illustrated, and built the marketing
								site for{" "}
								<CustomLink to="/projects/theater-toolkit">
									Theater Toolkit
								</CustomLink>
								, a custom website product for independent
								theaters, complete with a POS-integrated
								checkout process
							</li>
							<li>
								Created a full suite of illustration, design,
								and marketing assets
							</li>
							<li>
								Attended tradeshows to promote the product,
								securing key sales opportunities and
								demonstrating excellent verbal and written
								communication skills
							</li>
						</ul>
					),
				},
				{
					name: "captive-content",
					title: "Captive Content",
					year: "March 2017 - May 2018",
					description: (
						<ul>
							<li>
								Designed, illustrated, and built the{" "}
								<CustomLink to="projects/captive-content">
									Captive Content
								</CustomLink>{" "}
								marketing site
							</li>
							<li>
								Created a variety of illustration, design, and
								marketing assets, ensuring consistent branding
								and messaging
							</li>
						</ul>
					),
				},
			],
		},
		{
			name: "skills",
			title: "Skills",
			items: [
				{
					name: "web-development",
					title: "Front-End Web Development and Engineering",
					description: (
						<ul>
							<li>
								<b>Languages:</b> HTML, CSS, SCSS, JavaScript,
								TypeScript
							</li>
							<li>
								<b>Libraries and Frameworks:</b> ReactJS, Vue,
								NextJS
							</li>
							<li>
								<b>Source control:</b> GitHub, Fork, Git-based
								programs
							</li>
							<li>
								<b>Other:</b> Visual Studio Code, Jest for unit
								testing, Storybook, web accessibility, code
								scalability, performance optimization,
								cross-functional collaboration
							</li>
						</ul>
					),
				},
				{
					name: "design-and-illustration",
					title: "Graphic Design and Illustration",
					description: (
						<ul>
							<li>
								<b>Media:</b> print, web design, brand design,
								virtual marketing
							</li>
							<li>
								<b>Visual communication:</b> digital
								illustration, user interface (UI) design, user
								experience (UX) design
							</li>
						</ul>
					),
				},
				{
					name: "software-proficiencies",
					title: "Software Proficiencies",
					description: (
						<ul>
							<li>
								<b>Adobe:</b> Photoshop, Illustrator, InDesign
							</li>
							<li>
								<b>Other:</b> Figma, Procreate, Visual Studio
								Code, GitHub, Fork
							</li>
						</ul>
					),
				},
			],
		},
		{
			name: "experience",
			title: "Experience",
			items: [
				{
					name: "granicus",
					title: "Senior Web Developer",
					year: "February 2021 - Present",
					company: "Granicus (formerly Simpleview)",
					description: (
						<ul>
							<li>
								Mentored junior employees in frontend
								development, web accessibility, source control,
								and coding best practices via regular peer
								reviews and one-on-one coaching sessions
							</li>
							<li>
								Developed over{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify(["development"])}`}
								>
									100 highly custom websites
								</CustomLink>{" "}
								for destination marketing organizations,
								ensuring alignment with user experience, brand
								consistency, and code resiliency requirements
							</li>
							<li>
								Completed{" "}
								<CustomLink to={socialMedia.github.url}>
									72 merged pull requests
								</CustomLink>{" "}
								to the company&apos;s proprietary React
								component library, built using Storybook and
								TypeScript, enhancing scalability and code
								reusability and utilizing agile software
								development methodologies
							</li>
							<li>
								Wrote automated unit tests for React components
								using Jest
							</li>
							<li>
								Completed over{" "}
								<CustomLink to={socialMedia.github.url}>
									200 merged pull requests
								</CustomLink>{" "}
								to the company&apos;s foundational code
								repositories, improving quality of life and
								performance of every client&apos;s codebase and
								becoming the Operations department&apos;s top
								contributor on GitHub, reducing overall
								development time across client projects by 50%
							</li>
							<li>
								Championed accessibility across all web
								projects, ensuring compliance with WCAG
								standards and enhancing overall usability
							</li>
							<li>
								Established best practices for web languages,
								libraries, and frameworks like HTML, CSS,
								TypeScript, JavaScript, and React
							</li>
							<li>
								Optimized web pages and code repositories for
								maximum efficiency, performance, accessibility,
								and speed, raising performance and accessibility
								metrics across all client projects by 30%
							</li>
						</ul>
					),
				},
				{
					name: "desert-lab-studio",
					title: "Designer and Web Developer",
					year: "October 2015 - February 2021",
					company:
						"Desert Lab Studio (formerly Simply Bits Enterprise Services)",
					description: (
						<ul>
							<li>
								Designed and built dozens of websites for a wide
								variety of clientele using the Umbraco CMS, with
								an emphasis on customer satisfaction and quality
								user experiences
							</li>
							<li>
								Created reusable base client templates for
								Umbraco, reducing project build time by 30%
							</li>
							<li>
								Learned how to code on the job and was promoted
								twice for demonstrating quick learning ability
								and high proficiency
							</li>
							<li>
								Created a full suite of branding and marketing
								materials, including illustrations and a
								website, for software product{" "}
								<CustomLink to="/projects/theater-toolkit">
									Theater Toolkit
								</CustomLink>
							</li>
							<li>
								Led the development of modern SaaS products and
								collaborated among cross-functional teams in all
								aspects of the software development life cycle,
								from concept and design to deployment
							</li>
							<li>
								Mentored junior employees in frontend
								development, source control, coding best
								practices, web and graphic design, and user
								experience design via regular peer reviews and
								one-on-one coaching sessions
							</li>
						</ul>
					),
				},
				{
					name: "zarpara",
					title: "Designer and Illustrator",
					year: "June 2013 - December 2019",
					company: "Zarpara Vineyard",
					description: (
						<ul>
							<li>
								Revitalized Zarpara&apos;s brand with{" "}
								<CustomLink to="/projects/zarpara-vineyard">
									illustrated wine labels
								</CustomLink>
								, ensuring consistent brand messaging and visual
								appeal
							</li>
							<li>
								Created illustrated print marketing materials,
								optimizing design for maximum visual impact and
								brand recognition
							</li>
						</ul>
					),
				},
				{
					name: "ua-print-studio",
					title: "Intern",
					year: "January 2013 - May 2013",
					company: "University of Arizona Digital Print Studio",
					description: (
						<ul>
							<li>
								Maintained multiple large-format printers in a
								demanding, fast-paced environment,
								troubleshooting technical issues as they arose
							</li>
							<li>
								Edited digital files to ensure optimum print
								quality, demonstrating a keen eye for detail
							</li>
							<li>
								Collaborated with a team to handle a steady flow
								of customers and coordinate over 20 custom print
								jobs per shift
							</li>
						</ul>
					),
				},
			],
		},
		{
			name: "education",
			title: "Education",
			items: [
				{
					name: "university-of-arizona",
					title: "University of Arizona",
					year: "August 2010 - May 2013",
					description: (
						<ul>
							<li>
								Graduated summa cum laude with a bachelor&apos;s
								of fine art, emphasis in{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify([
										"illustration",
									])}`}
								>
									visual communication
								</CustomLink>
							</li>
							<li>
								Completed a 5-week study abroad program in 2012
								to Orvieto, Italy
							</li>
						</ul>
					),
				},
				{
					name: "mesa-community-college",
					title: "Mesa Community College",
					year: "August 2006 - May 2009",
					description: (
						<p>
							Earned an associate&apos;s of fine art, with an
							emphasis in{" "}
							<CustomLink to="/projects/figure-studies">
								figure drawing
							</CustomLink>
						</p>
					),
				},
			],
		},
	],
};
