import { fileURLToPath } from 'url';
// Helper: use Node's built-in dirname from 'path'
import { dirname } from 'path';
import fs from 'fs';

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

export function load() {
        const enrichedLanding = landing.map(item => ({
                ...item,
                media: getMediaForProject(item.href)
        }));

        return { landing: enrichedLanding };
}
