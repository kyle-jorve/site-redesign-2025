import { BioType } from "@/types/cv-types";

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
	buttonText: <>See R&eacute;sum&eacute;</>,
	image: {
		name: "bio-image",
		sources: [
			{
				url: "/fake-url.jpg",
				minScreenWidth: 640,
			},
		],
		mobileSource: "/fake-url.jpg",
		alt: "a portrait of Kyle Jorve",
		width: 680,
		height: 800,
	},
};
