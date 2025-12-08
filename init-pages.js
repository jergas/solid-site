import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadLanding, createPageServer, createPageSvelte } from './src/lib/SolidLibrary.js';

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

// Helper to remove leading slash and join with work/ folder at root
function getProjectDir(href) {
    // href e.g. /work/uncertainty
    // remove leading / -> work/uncertainty
    // join with root
    const relativePath = href.replace(/^\/+/, '');
    // dirname is root (where init-pages.js is)
    // The previous code assumed init-pages.js was at root, but used path.join(dirname, 'src', 'routes', ...)
    // which was correct for placing route files.
    // BUT we need two paths now:
    // 1. Where to check for existence (the source asset directory in 'work/')
    // 2. Where to write the route files (the target route directory in 'src/routes/work/')
    return path.join(dirname, relativePath);
}

function getTargetRouteDir(href) {
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

        const sourceDir = getProjectDir(project.href);
        if (!fs.existsSync(sourceDir)) {
            console.error(`ERROR: Source directory missing for project ${project.href}`);
            console.error(`Expected path: ${sourceDir}`);
            // Return error as requested
            process.exit(1);
        }

        // Check if it is a directory
        const stat = fs.statSync(sourceDir);
        if (!stat.isDirectory()) {
            console.error(`ERROR: Path is not a directory: ${sourceDir}`);
            process.exit(1);
        }

        // Ensure target directory exists in src/routes
        const targetDir = getTargetRouteDir(project.href);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        projectsToInit.push({ dirPath: targetDir, href: project.href });
    }

    console.log('All source directories exist. creating files...');

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
