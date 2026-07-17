import fs from "fs";
import path from "path";

/** @deprecated Use scripts/sync-enabled-fabric-routes.mjs instead — reads folders automatically. */
const SLUGS = ["cotton", "silk", "linen", "blends", "viscose"];

const root = path.join(process.cwd(), "src", "app", "fabrics");

for (const slug of SLUGS) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import { FabricSlugPage } from "@/components/FabricSlugPage";

export default function Page() {
  return <FabricSlugPage slug="${slug}" />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

console.log("Created", SLUGS.length, "fabric page routes");
console.log("Tip: run npm run dev — it auto-syncs enabled routes from your fabric folders.");
