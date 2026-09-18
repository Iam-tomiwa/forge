import { buildForgeRegistryItem } from "@/lib/registry";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildForgeRegistryItem("svelte"));
}
