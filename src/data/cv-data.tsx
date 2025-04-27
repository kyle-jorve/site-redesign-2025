import { socialMedia } from "@/data/global-data";
import { BioType, ResumeType } from "@/types/cv-types";

export const featuredWorkTitle = "Featured Work";
export const featuredWorkUrl = "/projects/";

const yearsOfExperience = new Date().getFullYear() - 2015;
export const bio: BioType = {
	title: "About Me",
	body: (
		<>
			<p className="body-text large">
				My name is Kyle Jorve, and I have too many creative passions. It
				would be fair to say I&apos;m a jack of all trades.
			</p>
			<p>
				It&apos;s hardly a surprise, then, that I&apos;ve had such a
				meandering career path. I graduated summa cum laude from the
				University of Arizona with a bachelor&apos;s of fine art,
				emphasis in visual communication. It was there I planted the
				seeds of the stories I&apos;m presently writing.
			</p>
			<p>
				In 2015, I landed my first job doing web design and development,
				and fell in love with both, thus adding to my already outsized
				stack of creative pursuits.
			</p>
			<p>
				Today, I&apos;m a professional front end web developer and
				halfway decent designer with {yearsOfExperience} years of
				experience. By day, I help build websites for a destination
				marketing company. By night, I keep my other passions
				alive&mdash;which is to say I write lots of nerdy fiction,
				mostly fantasy and sci-fi.
			</p>
		</>
	),
	url: "/cv#resume",
	buttonText: <>See R&eacute;sum&eacute;</>,
	image: {
		name: "bio-image",
		sources: [
			{
				url: "https://placehold.co/664x790",
				minScreenWidth: 1024,
				width: 664,
				height: 790,
			},
			{
				url: "https://placehold.co/1024x680",
				minScreenWidth: 640,
				width: 1024,
				height: 680,
			},
		],
		mobileSource: "https://placehold.co/640x730",
		alt: "a portrait of Kyle Jorve",
		width: 640,
		height: 730,
	},
};

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
								At Simpleview/Granicus, I have built front end
								components for a wide variety of destination
								marketing websites. I write performant,
								sustainable code and undergo regular peer
								review. I work with libraries like React and
								Vue, and write code in JavaScript, TypeScript,
								HTML, and CSS.
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
									products
								</li>
								<li>
									I designed and built websites using the
									Umbraco CMS and a myriad of web languages,
									including HTML, CSS, SCSS, and JavaScript
								</li>
								<li>
									I created custom graphic and illustration
									work for the purposes of marketing, web
									design, advertising, and product development
								</li>
								<li>
									I attended trade shows to promote Theater
									Toolkit, a software product for independent
									movie theaters.
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
							I wrote and illustrated an original story titled
							&quot;Ivory and Sinew&quot; for the comic book
							anthology &quot;New Nebula Volume 1&quot;
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
							I designed print marketing materials and wine
							labels, and created custom illustrations.
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
								I have years of experience in a variety of web
								languages, libraries, and frameworks, including,
								but not limited to, the following:
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
								amassed a comprehensive and multidisciplined
								body of work in the areas of print media, web
								design, and virtual marketing.
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
								The primary focus of my education was
								illustration, and I excelled at nothing more
								than digital illustration.
							</p>
							<p>
								Presently, I use this background to enhance my
								other skills, like design and writing.
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
								<strong>InDesign</strong>. For drawing and
								painting I tend to use{" "}
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
							I graduated summa cum laude from the University of
							Arizona in 2013, earning a Bachelor&apos;s of Fine
							Art with an emphasis in visual communication and a
							concentration in illustration.
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
							through the University of Arizona. I stayed in
							Orvieto, Italy for 5 weeks, mingling with the
							locals, practicing my Italian, and completing a
							small, illustrated book for the end-of-term
							exhibition.
						</p>
					),
					year: "2012",
				},
				{
					name: "mesa-community-college",
					title: "Associates of Fine Art",
					description: (
						<p>
							In 2009 I graduated from Mesa Community College with
							an associate&apos;s degree in fine art. My education
							there focused most especially on the detailed study
							of the human figure.
						</p>
					),
					year: "2009",
				},
			],
		},
	],
};
