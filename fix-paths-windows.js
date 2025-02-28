// fix-paths-windows.js
import fs from "fs";
import path from "path";

// Create the directory structure for assets
const targetDir = path.join("dist", "Mega-Portfolio", "assets");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Copy all files from /assets to /Mega-Portfolio/assets
const sourceDir = path.join("dist", "assets");
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // Skip if it's a directory
    if (fs.statSync(sourcePath).isDirectory()) {
      console.log(`Skipping directory: ${sourcePath}`);
      return;
    }

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied: ${sourcePath} -> ${targetPath}`);
  });
  console.log("All assets copied successfully!");
} else {
  console.error("Source assets directory not found!");
}
