import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderName = process.argv[2] || 'default-feature';
const subFolders = ["containers", "components", "hooks", "services", "lib"];

subFolders.forEach(folder => {
    const folderPath = path.join(__dirname, 'features', folderName, folder);
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);

    const files = fs.readdirSync(folderPath);
    if (files.length === 0) {
        const gitkeepPath = path.join(folderPath, ".gitkeep");
        fs.writeFileSync(gitkeepPath, "");
        console.log(`Added .gitkeep to empty folder: ${gitkeepPath}`);
    } else {
        console.log(`Folder not empty, skipped .gitkeep: ${folderPath}`);
    }
});
