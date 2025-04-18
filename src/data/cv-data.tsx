import { socialMedia } from "@/data/global-data";
import { BioType, ResumeType } from "@/types/cv-types";

export const featuredWorkTitle = "Featured Work";
export const featuredWorkUrl = "/projects/";

export const bio: BioType = {
	title: "About Me",
	body: (
		<>
			<p className="body-text large">
				Remind me to thank John for a lovely weekend. Jaguar shark! So
				tell me - does it really exist? You&apos;re a very talented
				young man, with your own clever thoughts and ideas. Do you need
				a manager? Do you have any idea how long it takes those cups to
				decompose.
			</p>
			<p>
				Remind me to thank John for a lovely weekend. Jaguar shark! So
				tell me - does it really exist? Just my luck, no ice. God help
				us, we&apos;re in the hands of engineers. Forget the fat lady!
				You&apos;re obsessed with the fat lady! Drive us out of here!
				Hey, you know how I&apos;m, like, always trying to save the
				planet? Here&apos;s my chance.
			</p>
			<p>
				Jaguar shark! So tell me - does it really exist? Must go
				faster... go, go, go, go, go! We gotta burn the rain forest,
				dump toxic waste, pollute the air, and rip up the OZONE!
				&apos;Cause maybe if we screw up this planet enough, they
				won&apos;t want it anymore!
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
			},
			{
				url: "https://placehold.co/1024x680",
				minScreenWidth: 640,
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
					name: "experience-item-1",
					title: "Job Title",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year - Year",
					company: "Company",
				},
				{
					name: "experience-item-2",
					title: "Job Title",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year - Year",
					company: "Company",
				},
				{
					name: "experience-item-3",
					title: "Job Title",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year - Year",
					company: "Company",
				},
			],
		},
		{
			name: "skills",
			title: "Skills",
			items: [
				{
					name: "skills-item-1",
					title: "Skill",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
				},
				{
					name: "skills-item-2",
					title: "Skill",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
				},
				{
					name: "skills-item-3",
					title: "Skill",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
				},
			],
		},
		{
			name: "education",
			title: "Education",
			items: [
				{
					name: "education-item-1",
					title: "Degree",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year",
				},
				{
					name: "education-item-2",
					title: "Degree",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year",
				},
				{
					name: "education-item-3",
					title: "Degree",
					description: (
						<p>
							Eventually, you do plan to have dinosaurs on your
							dinosaur tour, right? You know what? It is beets.
							I&apos;ve crashed into a beet truck. Just my luck,
							no ice. Yeah, but John, if The Pirates of the
							Caribbean breaks down, the pirates don&apos;t eat
							the tourists.
						</p>
					),
					year: "Year",
				},
			],
		},
	],
};
