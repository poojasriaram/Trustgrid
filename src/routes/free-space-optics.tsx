import { createFileRoute } from "@tanstack/react-router";
import { FreeSpaceOpticsPage } from "./solutions/free-space-optics";

export const Route = createFileRoute("/free-space-optics")({
  head: () => ({
    meta: [
      { title: "Free Space Optics (FSO) Solutions & Advisory | TRUSTGRID.AI" },
      {
        name: "description",
        content:
          "Explore Free Space Optics solutions with TRUSTGRID.AI for enterprise connectivity, FSO feasibility, network design, deployment, integration, monitoring, and optimization.",
      },
      {
        name: "keywords",
        content:
          "Free Space Optics, FSO solutions, FSO connectivity, Free Space Optical Communication, FSO network solutions, FSO deployment, FSO site survey, FSO consulting, FSO feasibility assessment, enterprise FSO connectivity, optical wireless communication",
      },
      { property: "og:title", content: "Free Space Optics (FSO) Enterprise Connectivity & Advisory | TRUSTGRID.AI" },
      {
        property: "og:description",
        content:
          "High-Speed Wireless Optical Connectivity Without Cables. Technology Advisory, Network Engineering, FSO Solution Design, Deployment & Optimization.",
      },
      { property: "og:url", content: "/free-space-optics" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/solutions/free-space-optics" }],
  }),
  component: FreeSpaceOpticsPage,
});
