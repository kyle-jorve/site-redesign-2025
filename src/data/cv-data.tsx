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
			<p>
				I&apos;m a senior front-end developer and engineer with{" "}
				{yearsOfExperience} years of professional experience in
				front-end web development, front-end engineering, and web and
				graphic design. I am extremely passionate about implementing
				strong design and building excellent user experiences with an
				emphasis on accessibility. I am fluent in HTML, CSS, and
				JavaScript, and highly proficient in TypeScript, ReactJS, and
				NextJS.
			</p>
		),
	},
	sections: [
		{
			name: "experience",
			title: "Experience",
			items: [
				{
					name: "granicus",
					title: "Senior Web Developer",
					year: "2021 - Present",
					company: "Granicus (formerly Simpleview)",
					description: (
						<>
							<ul>
								<li>
									Contributed to the development of over 100{" "}
									<CustomLink
										to={`/projects?categories=${JSON.stringify(
											["development"],
										)}`}
									>
										highly custom websites
									</CustomLink>{" "}
									for destination marketing organizations,
									ensuring alignment with user experience,
									brand consistency, and code resiliency
									requirements
								</li>
								<li>
									Contributed{" "}
									<CustomLink to="https://github.com/kyle-jorve?tab=overview&org=simpleviewinc">
										72 merged pull requests
									</CustomLink>{" "}
									to the company&apos;s proprietary React
									component library, built using Storybook and
									TypeScript, enhancing scalability and code
									reusability and utilizing agile software
									development methodologies; wrote automated
									testing for each component build using Jest
								</li>
								<li>
									Contributed over{" "}
									<CustomLink to="https://github.com/kyle-jorve?tab=overview&org=simpleviewinc">
										200 merged pull requests
									</CustomLink>{" "}
									to the company&apos;s foundational code
									repositories, improving quality of life and
									performance of every client&apos;s codebase
									and becoming the Operations
									department&apos;s top contributor on GitHub
								</li>
								<li>
									Championed accessibility across all web
									projects, ensuring compliance with WCAG
									standards and enhancing overall usability
								</li>
								<li>
									Demonstrated mastery of web languages,
									libraries, and frameworks like HTML, CSS,
									TypeScript, JavaScript, React, Vue, and
									NextJS, and a comprehensive grasp of coding
									best practices
								</li>
								<li>
									Optimized web pages and code repositories
									for maximum efficiency, performance,
									accessibility, and speed
								</li>
							</ul>
						</>
					),
				},
				{
					name: "desert-lab-studio",
					title: "Designer, Web Developer",
					year: "2015 - 2021",
					company:
						"Desert Lab Studio (formerly Simply Bits Enterprise Services)",
					description: (
						<>
							<ul>
								<li>
									Designed and built dozens of websites from
									scratch for a wide variety of clientele
									using the Umbraco CMS, with an emphasis on
									customer satisfaction and quality user
									experiences
								</li>
								<li>
									Learned how to code on the job and was
									promoted twice for demonstrating quick
									learning ability and high proficiency
								</li>
								<li>
									Created a full suite of branding and
									marketing materials, including illustrations
									and a website, for software product{" "}
									<CustomLink to="/projects/theater-toolkit">
										Theater Toolkit
									</CustomLink>
								</li>
								<li>
									Contributed to the development of modern
									SaaS products and participated in all
									aspects of the software development life
									cycle, from concept and design to deployment
								</li>
							</ul>
						</>
					),
				},
				{
					name: "new-nebula",
					title: "Writer, Illustrator",
					year: "2015",
					company: "New Nebula Comic Anthology",
					description: (
						<p>
							I wrote and illustrated an original story titled{" "}
							<i>Ivory and Sinew</i> for the comic book anthology{" "}
							<i>New Nebula Volume 1</i>.
						</p>
					),
				},
				{
					name: "zarpara",
					title: "Designer, Illustrator",
					year: "2013 - 2019",
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
					year: "2013",
					company: "University of Arizona Digital Print Studio",
					description: (
						<ul>
							<li>
								Helped maintain multiple large-format printers
								in a demanding, fast-paced environment,
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
			name: "projects",
			title: "Projects",
			items: [
				{
					name: "simpleview-base-client",
					title: "Simpleview Base Client",
					year: "2021 - Present",
					description: (
						<p>
							Contributed over 200 pull requests to
							Simpleview&apos;s base client repositories, which
							are used as foundational code for every Simpleview
							client website project. Reviewed and revised code
							for maximum performance and scalability.
						</p>
					),
				},
				{
					name: "destination-design-kit",
					title: "Destination Design Kit",
					year: "2021 - 2024",
					description: (
						<p>
							Contributed 72 merged pull requests to Destination
							Design Kit, Simpleview&apos;s proprietary React
							component library, which was heavily researched for
							user experience and accessibility, and built for
							scalability with atomic design principles using
							Storybook, TypeScript, and Jest for unit testing.
						</p>
					),
				},
				{
					name: "theater-toolkit",
					title: "Theater Toolkit",
					year: "2016 - 2021",
					description: (
						<p>
							Designed, illustrated, and built the marketing site
							for{" "}
							<CustomLink to="/projects/theater-toolkit">
								Theater Toolkit
							</CustomLink>
							, a custom website product for independent theaters,
							complete with a POS-integrated checkout process.
							Created a variety of illustration, design, and
							marketing assets. Attended tradeshows to promote the
							product, demonstrating excellent verbal and written
							communication skills.
						</p>
					),
				},
				{
					name: "captive-content",
					title: "Captive Content",
					year: "2017 - 2018",
					description: (
						<p>
							Designed, illustrated, and built the{" "}
							<CustomLink to="/projects/captive-content">
								Captive Content
							</CustomLink>{" "}
							marketing site, and delivered a variety of
							illustration, design, and marketing assets, ensuring
							consistent brand messaging.
						</p>
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
						<>
							<p>
								I have {yearsOfExperience} years of experience
								working with a variety of web languages,
								libraries, and frameworks, including{" "}
								<b>
									HTML
									<b />, <b>CSS</b>, <b>SCSS</b>,{" "}
									<b>JavaScript</b>, <b></b>TypeScript
								</b>
								, and modern JavaScript frameworks such as{" "}
								<b>ReactJS</b>, <b>Vue</b>, and <b>NextJS</b>,
								and contributing to cross-functional teams. I am
								extremely proficient in writing readable,
								reusable, accessible, and scalable code, and
								optimizing for maximum speed, performance,
								scalability, and accessibility.
							</p>
						</>
					),
				},
				{
					name: "design-and-illustration",
					title: "Graphic Design and Illustration",
					description: (
						<>
							<p>
								I have amassed a comprehensive and
								multidisciplinary{" "}
								<CustomLink to="/projects">
									body of work
								</CustomLink>{" "}
								in <b>print media</b>, <b>web design</b>,{" "}
								<b>brand design</b>, and{" "}
								<b>virtual marketing</b>. The primary focus of
								my education was illustration, and in particular
								I excelled at <b>digital illustration</b>.
								Presently, I use this background to enhance my
								design and communication skills.
							</p>
						</>
					),
				},
				{
					name: "software-proficiencies",
					title: "Software Proficiencies",
					description: (
						<>
							<p>
								My skills are widely varied. I am extremely
								proficient in{" "}
								<b>
									Adobe Creative Cloud (Photoshop,
									Illustrator, InDesign, etc.)
								</b>
								, <b>Figma</b>, <b>Procreate</b>,{" "}
								<b>Visual Studio Code</b>, and{" "}
								<CustomLink to={socialMedia.github.url}>
									GitHub
								</CustomLink>{" "}
								and Git-based source control programs.
							</p>
						</>
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
					year: "2013",
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
					year: "2009",
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
