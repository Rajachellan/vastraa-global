const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const targets = [".next", path.join("node_modules", ".cache")];

for (const rel of targets) {
  const dir = path.join(root, rel);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Removed ${rel}`);
  }
}

console.log("Clean complete. Run: npm run dev");
