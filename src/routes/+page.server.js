import { fileURLToPath } from 'url';
// Helper: use Node's built-in dirname from 'path'
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';
import { getDirectoryMedia } from '$lib/SolidLibrary';

import landing from '../../landing.json';

// Compute project root:
// __filename → .../src/routes/+page.server.js
// dirname(__filename) → .../src/routes
// dirname(dirname(__filename)) → .../src
// dirname(dirname(dirname(__filename))) → .../ ← project root
const __filename = fileURLToPath(import.meta.url);
const PROJECT_ROOT = dirname(dirname(dirname(__filename)));


function getMediaForProject(href) {
        //        const relativePath = href.replace(/^\/+/, '');
        //        const dirPath = join(PROJECT_ROOT, relativePath);

        if (!fs.existsSync(href)) {
                return [];
        }

        const files = fs.readdirSync(href)
                .filter(file => /\.(jpg|jpeg|png|mp4|txt)$/i.test(file));

        return files.map(file => `${href}/${file}`);
}

import { getDirectoryMedia } from '$lib/SolidLibrary';
import path from 'path';

export function load() {
        const enrichedLanding = landing.map(item => ({
                ...item,
                media: getMediaForProject(item.href)
        }));

        // Define the menu sections we want to show
        const menuSections = ['nosotros', 'servicios', 'contacto'];

        // Define sections data
        const sections = [];

        // 1. Add Menu Sections
        for (const sectionName of menuSections) {
                const dirPath = path.resolve(process.cwd(), 'menu', sectionName);
                // Use getDirectoryMedia logic (via helper or direct import if moved)
                // We need to import getDirectoryMedia from SolidLibrary.
                // Note: getDirectoryMedia handles missing dirs gracefully.
                const data = getDirectoryMedia(dirPath);

                // Extract recipient email for contact form if present
                let recipientEmail = '';
                if (sectionName === 'contacto' && fs.existsSync(dirPath)) {
                        const files = fs.readdirSync(dirPath);
                        const emailFile = files.find(f => /correo\.txt$/.test(f));
                        if (emailFile) {
                                recipientEmail = fs.readFileSync(path.join(dirPath, emailFile), 'utf-8').trim();
                        }
                }

                sections.push({
                        id: sectionName,
                        title: { en: sectionName.toUpperCase() },
                        path: `menu/${sectionName}`, // Used for media relative path construction
                        media: data.media,
                        text: data.text,
                        recipientEmail
                });
        }

        // 2. Add Project Sections
        for (const project of landing) {
                // project.href is like /work/plataformas
                const relativePath = project.href.replace(/^\/+/, '');
                const dirPath = path.resolve(process.cwd(), relativePath);
                const data = getDirectoryMedia(dirPath);

                // Generate an ID for the project section
                const projectId = `project-${relativePath.split('/').pop()}`; // e.g. project-plataformas

                sections.push({
                        id: projectId,
                        title: project.title,
                        path: relativePath,
                        media: data.media,
                        text: data.text
                });
        }

        return {
                landing: enrichedLanding,
                sections
        };
}
