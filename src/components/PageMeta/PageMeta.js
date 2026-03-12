import { useEffect } from "react";
import { SITE } from "../../config/site";

export function PageMeta({ title, description, path = "" }) {
  const fullTitle = title ? `${title} — ${SITE.name}` : SITE.name;
  const canonical = path ? `${SITE.url}/${path.replace(/^\//, "")}` : `${SITE.url}/`;

  useEffect(() => {
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute("content", description);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);
  }, [fullTitle, description, canonical]);

  return null;
}
