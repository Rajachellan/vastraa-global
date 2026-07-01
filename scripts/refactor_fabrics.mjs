import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fabricsDir = path.join(__dirname, '../src/app/fabrics');
const cottonPagePath = path.join(fabricsDir, 'cotton/page.tsx');
const cottonContent = fs.readFileSync(cottonPagePath, 'utf8');

const fabrics = ['silk', 'linen', 'blends', 'viscose', 'jute', 'modal', 'rayon', 'tencil'];

fabrics.forEach((fabric) => {
  const fabricName = fabric.charAt(0).toUpperCase() + fabric.slice(1);
  const targetDir = path.join(fabricsDir, fabric);
  
  // Ensure directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Replace 'cotton' -> fabric and 'Cotton' -> fabricName
  let newContent = cottonContent
    .replace(/cotton/g, fabric)
    .replace(/Cotton/g, fabricName);

  const targetPagePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetPagePath, newContent, 'utf8');
  console.log(`Refactored ${fabric}/page.tsx`);
});
