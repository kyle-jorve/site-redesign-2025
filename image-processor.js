import sharp from "sharp";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const settings = {
	skipExistingDirectories: true,
	ignoreList: [".DS_Store"],
};

async function processImages(inputDir) {
	const sizes = [1920, 1440, 1024, 960, 768, 720, 640, 512, 480, 320];
	const formats = ["avif", "webp", "jpg"];

	try {
		const files = await fs.readdir(inputDir);

		for (let file of files) {
			const ext = path.extname(file);
			const base = path.basename(file, ext);
			const inputPath = path.join(inputDir, file);
			const newDirectory = `./public/images/${base}/`;

			if (
				settings.ignoreList.includes(base) ||
				(settings.skipExistingDirectories && existsSync(newDirectory))
			)
				continue;

			await fs.mkdir(newDirectory, {
				recursive: true,
			});

			for (const format of formats) {
				for (const size of sizes) {
					const extChange = ext.replace(".", "") !== format;
					const newExt = !extChange ? ext : `.${format}`;
					const newFileName = `${base}-kyle-jorve-${size}${newExt}`;
					const outputPath = path.join(newDirectory, newFileName);
					const image = sharp(inputPath);

					if (extChange) image.toFormat(format);

					await image.resize(size).toFile(outputPath);
					console.log(`Processed ${newFileName}`);
				}
			}
		}
	} catch (error) {
		console.error("Error processing images:", error);
	}
}

processImages("./src/images/");
