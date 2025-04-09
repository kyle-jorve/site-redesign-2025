export function printClassNames(classes: string[]) {
	const cleanClasses = classes
		.filter((c) => c)
		.map((cl) => cl.trim().split(" "))
		.flat();

	return cleanClasses.join(" ");
}
