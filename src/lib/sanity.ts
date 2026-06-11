import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: unknown) {
  if (!builder || !source) return "";
  return builder.image(source);
}

export async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params);
}
