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
	sections: [
		{
			name: "experience",
			title: "Experience",
			items: [
				{
					name: "simpleview",
					title: "Web Developer",
					description: (
						<>
							<p>
								At Simpleview/Granicus, I build{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify([
										"development",
									])}`}
								>
									front end components
								</CustomLink>{" "}
								for a wide variety of destination marketing
								websites. I write performant, sustainable code
								and undergo regular peer review. I work with
								libraries like React and Vue, and languages like
								JavaScript, TypeScript, HTML, and CSS.
							</p>
							<p>In 2024, Simpleview was acquired by Granicus.</p>
						</>
					),
					year: "2021 - Present",
					company: "Simpleview / Granicus",
				},
				{
					name: "desert-lab-studio",
					title: "Web Designer + Developer",
					description: (
						<>
							<p>
								At Simply Bits/Desert Lab Studio, I enjoyed a
								broad range of responsibilities. My primary
								roles were as a web designer and front end
								developer, but my job covered a myriad of other
								disciplines, like graphic design, marketing, and
								sales.
							</p>
							<p>
								In summary, my experience at Simply Bits/Desert
								Lab Studio encompassed the following:
							</p>
							<ul>
								<li>
									I created print, web, and virtual marketing
									materials for Simply Bits/Desert Lab Studio,
									their clients, and their various software
									products.
								</li>
								<li>
									I designed and built websites using the
									Umbraco CMS and a variety of web languages,
									including HTML, CSS, SCSS, and JavaScript.
								</li>
								<li>
									I created custom graphic and illustration
									work for the purposes of marketing, web
									design, advertising, and product
									development.
								</li>
								<li>
									I attended trade shows to promote{" "}
									<CustomLink to="/projects/theater-toolkit">
										Theater Toolkit
									</CustomLink>
									, a software product for independent movie
									theaters.
								</li>
							</ul>
							<p>
								In 2019, the Enterprise Services department of
								Simply Bits split off into its own company,
								becoming Desert Lab Studio.
							</p>
						</>
					),
					year: "2015 - 2021",
					company: "Simply Bits / Desert Lab Studio",
				},
				{
					name: "new-nebula",
					title: "Writer, Illustrator",
					description: (
						<p>
							I wrote and illustrated an original story titled{" "}
							<i>Ivory and Sinew</i> for the comic book anthology{" "}
							<i>New Nebula Volume 1</i>.
						</p>
					),
					year: "2015",
					company: "New Nebula Comic Anthology",
				},
				{
					name: "zarpara",
					title: "Designer, Illustrator",
					description: (
						<p>
							I designed print marketing materials and{" "}
							<CustomLink to="/projects/zarpara-vineyard">
								wine labels
							</CustomLink>
							, and created custom illustrations.
						</p>
					),
					year: "2013 - 2019",
					company: "Zarpara Vineyard",
				},
				{
					name: "ua-print-studio",
					title: "Intern",
					description: (
						<p>
							I was responsible for printing in multiple formats
							and assisting customers in a demanding environment.
							I worked with a team to manage a steady flow of
							customers, edited files to ensure optimum print
							quality, and helped maintain large format printers.
						</p>
					),
					year: "2013",
					company: "Universty of Arizona Digital Print Studio",
				},
			],
		},
		{
			name: "skills",
			title: "Skills",
			items: [
				{
					name: "web-development",
					title: "Web Development",
					description: (
						<>
							<p>
								I have {yearsOfExperience} years of experience
								in a variety of web languages, libraries, and
								frameworks, including, but not limited to, the
								following:
							</p>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>SCSS</li>
								<li>JavaScript</li>
								<li>TypeScript</li>
								<li>React</li>
								<li>Vue</li>
								<li>NextJS</li>
							</ul>
						</>
					),
				},
				{
					name: "graphic-design",
					title: "Graphic Design",
					description: (
						<>
							<p>
								Thanks to the wide range of experience my
								education and career have afforded me, I have
								amassed a comprehensive and multidisciplined{" "}
								<CustomLink to="/projects">
									body of work
								</CustomLink>{" "}
								in the areas of print media, web design, and
								virtual marketing.
							</p>
						</>
					),
				},
				{
					name: "illustration",
					title: "Illustration",
					description: (
						<>
							<p>
								The primary focus of my education was{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify([
										"illustration",
									])}`}
								>
									illustration
								</CustomLink>
								, and in particular I excelled at digital
								illustration.
							</p>
							<p>
								Presently, I use this background to enhance my
								other skills, like{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify([
										"design",
									])}`}
								>
									design
								</CustomLink>{" "}
								and{" "}
								<CustomLink
									to={`/projects?categories=${JSON.stringify([
										"writing",
									])}`}
								>
									writing
								</CustomLink>
								.
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
								I am expertly skilled in{" "}
								<strong>Adobe Creative Cloud</strong> software,
								most especially in <strong>Photoshop</strong>,{" "}
								<strong>Illustrator</strong>, and{" "}
								<strong>InDesign</strong>.
							</p>
							<p>
								For drawing and painting I tend to use{" "}
								<strong>Procreate</strong> on an iPad Pro.
							</p>
							<p>
								For web design, my software of choice is{" "}
								<strong>Figma</strong>.
							</p>
							<p>
								My preferred IDE is{" "}
								<strong>Visual Studio Code</strong>.
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
					title: "Bachelor's of Fine Art, Emphasis in Visual Communication",
					description: (
						<p>
							I graduated summa cum laude from the{" "}
							<strong>University of Arizona</strong> in 2013,
							earning a bachelor&apos;s degree in fine art with an
							emphasis in visual communication and a concentration
							in{" "}
							<CustomLink
								to={`/projects?categories=${JSON.stringify([
									"illustration",
								])}`}
							>
								illustration
							</CustomLink>
							.
						</p>
					),
					year: "2013",
				},
				{
					name: "italy-study-abroad",
					title: "Orvieto, Italy Study Abroad Program",
					description: (
						<p>
							In 2012 I embarked on a summer study abroad program
							through the University of Arizona. I stayed in{" "}
							<strong>Orvieto, Italy</strong> for 5 weeks,
							mingling with the locals, practicing my Italian, and
							completing a small, illustrated book for the
							end-of-term exhibition.
						</p>
					),
					year: "2012",
				},
				{
					name: "mesa-community-college",
					title: "Associates of Fine Art",
					description: (
						<p>
							In 2009 I graduated from{" "}
							<strong>Mesa Community College</strong> with an
							associate&apos;s degree in fine art. My education
							there focused most especially on the detailed study
							of the{" "}
							<CustomLink to="/projects/figure-studies">
								human figure
							</CustomLink>
							.
						</p>
					),
					year: "2009",
				},
			],
		},
	],
};
