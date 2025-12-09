import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Assuming SolidLibrary.js is in src/lib/, then root is 2 levels up.
const PROJECT_ROOT = path.resolve(__dirname, '../../');

export function loadLanding() {
    const landingPath = path.join(PROJECT_ROOT, 'landing.json');
    if (!fs.existsSync(landingPath)) {
        throw new Error(`landing.json not found at ${landingPath}`);
    }
    const content = fs.readFileSync(landingPath, 'utf-8');
    return JSON.parse(content);
}

export function getDirectoryMedia(dirPath) {
    if (!fs.existsSync(dirPath)) {
        return { media: [], text: '' };
    }

    const files = fs.readdirSync(dirPath);

    const media = files
        .filter(file => /\.(jpg|jpeg|png|mp4)$/i.test(file))
        .map(file => ({ filename: file }));

    let text = '';
    const textFiles = files.filter(file => /\.txt$/i.test(file));
    if (textFiles.length > 0) {
        text = textFiles
            .map(file => fs.readFileSync(path.join(dirPath, file), 'utf-8'))
            .join('\n\n');
    }

    return { media, text };
}

export function createPageServer(targetDir) {
    const templatePath = path.join(__dirname, 'templates', 'page.server.js.template');
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found at ${templatePath}`);
    }
    const templateContent = fs.readFileSync(templatePath, 'utf-8');

    // Check if file exists to avoid overwriting if strict? (Prompt said "should check if they are created and return an error if they aren't" for init script, 
    // but the library function executes the creation. The init script handles the check.)
    // Actually init script checks SUBDIRECTORIES existence.
    // "functions to create... files".

    const targetFile = path.join(targetDir, '+page.server.js');
    fs.writeFileSync(targetFile, templateContent);
}

export function createPageSvelte(targetDir) {
    const templatePath = path.join(__dirname, 'templates', 'page.svelte.template');
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found at ${templatePath}`);
    }
    const templateContent = fs.readFileSync(templatePath, 'utf-8');

    const targetFile = path.join(targetDir, '+page.svelte');
    fs.writeFileSync(targetFile, templateContent);
}
