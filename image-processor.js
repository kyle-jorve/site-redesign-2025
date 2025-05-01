import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

async function processImages(inputDir) {
	const commonSizes = [960, 768, 720, 640, 512, 480, 320];
	const commonFormats = ["avif", "webp"];

	try {
		const files = await fs.readdir(inputDir);

		for (let file of files) {
			const ext = path.extname(file);
			const base = path.basename(file, ext);
			const inputPath = path.join(inputDir, file);
			const sizes =
				ext === ".gif"
					? commonSizes
					: [1920, 1440, 1024, ...commonSizes];
			const formats = [...commonFormats, ext === ".gif" ? "gif" : "jpg"];

			await fs.mkdir(`./public/images/${base}/`, {
				recursive: true,
			});

			for (let format of formats) {
				for (let size of sizes) {
					const extChange = ext.replace(".", "") !== format;
					const newExt = !extChange ? ext : `.${format}`;
					const newFileName = `${base}-${size}${newExt}`;
					const outputPath = path.join(
						`./public/images/output/${base}/`,
						newFileName,
					);
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
