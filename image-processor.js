import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

async function processImages(inputDir) {
	const sizes = [1920, 1440, 1024, 768, 640, 480, 320];
	const formats = ["avif", "webp", "jpg"];

	try {
		const files = await fs.readdir(inputDir);

		for (let file of files) {
			const ext = path.extname(file);
			const base = path.basename(file, ext);
			const inputPath = path.join(inputDir, file);

			await fs.mkdir(`./public/images/output/${base}/`, {
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

processImages("./public/images/input/");
