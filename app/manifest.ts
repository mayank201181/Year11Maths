import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Year 11 Maths Lab",
    short_name: "Y11 Maths",
    description:
      "Interactive Edexcel IGCSE Higher Maths revision: guides, practice papers, mock exams, challenges and an AI tutor.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6fb",
    theme_color: "#4f46e5",
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
