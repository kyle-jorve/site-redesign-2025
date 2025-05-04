import sharp from "sharp";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const settings = {
	skipExistingDirectories: true,
};

async function processImages(inputDir) {
	const commonSizes = [1024, 960, 768, 720, 640, 512, 480, 320];
	const desktopSizes = [1920, 1440];
	const commonFormats = ["avif", "webp"];

	try {
		const files = await fs.readdir(inputDir);

		for (let file of files) {
			const ext = path.extname(file);
			const base = path.basename(file, ext);
			const inputPath = path.join(inputDir, file);
			const sizes = (() => {
				if (ext === ".gif" || base.endsWith("-mobile"))
					return commonSizes;
				if (base.endsWith("-desktop")) return desktopSizes;
				return [...desktopSizes, ...commonSizes];
			})();
			const formats = [...commonFormats, ext === ".gif" ? "gif" : "jpg"];
			const newDirectory = `./public/images/${base}/`;

			if (settings.skipExistingDirectories && existsSync(newDirectory))
				continue;

			await fs.mkdir(newDirectory, {
				recursive: true,
			});

			for (let format of formats) {
				for (let size of sizes) {
					const extChange = ext.replace(".", "") !== format;
					const newExt = !extChange ? ext : `.${format}`;
					const newFileName = `${base}-kyle-jorve-${size}${newExt}`;
					const outputPath = path.join(newDirectory, newFileName);
					const image = sharp(inputPath).resize(size);

					if (extChange) image.toFormat(format);

					await image.toFile(outputPath);
					console.log(`Processed ${newFileName}`);
				}
			}
		}
	} catch (error) {
		console.error("Error processing images:", error);
	}
}

processImages("./src/images/");
