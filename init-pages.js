import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadLanding, createPageServer, createPageSvelte } from './src/lib/SolidLibrary.js';

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

// Helper to remove leading slash and join with src/routes
function getProjectDir(href) {
    // href e.g. /work/uncertainty
    // remove leading / -> work/uncertainty
    // join with src/routes -> src/routes/work/uncertainty
    const relativePath = href.replace(/^\/+/, '');
    return path.join(dirname, 'src', 'routes', relativePath);
}

try {
    console.log('Loading landing.json...');
    const landing = loadLanding();

    console.log(`Found ${landing.length} projects.`);

    // First pass: Check existence
    const projectsToInit = [];
    for (const project of landing) {
        if (!project.href) {
            console.warn('Skipping project with no href:', project);
            continue;
        }

        const dirPath = getProjectDir(project.href);
        if (!fs.existsSync(dirPath)) {
            console.error(`ERROR: Directory missing for project ${project.href}`);
            console.error(`Expected path: ${dirPath}`);
            // Return error as requested
            process.exit(1);
        }

        // Check if it is a directory
        const stat = fs.statSync(dirPath);
        if (!stat.isDirectory()) {
            console.error(`ERROR: Path is not a directory: ${dirPath}`);
            process.exit(1);
        }

        projectsToInit.push({ dirPath, href: project.href });
    }

    console.log('All directories exist. creating files...');

    // Second pass: Create files
    for (const { dirPath, href } of projectsToInit) {
        console.log(`Processing ${href}...`);
        createPageServer(dirPath);
        createPageSvelte(dirPath);
    }

    console.log('Successfully initialized all project pages.');

} catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
}
