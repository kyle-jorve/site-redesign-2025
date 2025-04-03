export function printClassNames(classes: string[]) {
	const cleanClasses = classes.map((cl) => cl.trim().split(" ")).flat();

	return cleanClasses.filter((c) => c).join(" ");
}
