// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// This is the org's root Pages site (`<org>.github.io`), so it is served at `/` and needs no
// `base`. Internal links in content are bare paths (`/architecture/layers/`).
export default defineConfig({
  site: "https://cyber-arcology.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "cyber-arcology",
      description:
        "A self-contained system for running AI coding agents: fleet, runtime, communication, and change process.",
      // The cyber-* family mark: the shared command reticle around a per-package glyph
      // (cyberuni/cyber-mux docs/design/icon-system.md). The favicon self-themes; the header
      // logo ships as a light/dark pair because this site picks its theme by `data-theme`,
      // which `prefers-color-scheme` never sees.
      favicon: "/img/logo.svg",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        alt: "cyber-arcology",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cyber-arcology",
        },
      ],
      customCss: ["./src/styles/global.css"],
      editLink: {
        baseUrl:
          "https://github.com/cyber-arcology/cyber-arcology.github.io/edit/main/",
      },
      sidebar: [
        { label: "What is cyber-arcology", slug: "what-is" },
        {
          label: "Architecture",
          items: [
            { label: "Layers", slug: "architecture/layers" },
            { label: "Using parts on their own", slug: "architecture/independent-use" },
            { label: "Fleet vocabulary", slug: "architecture/vocabulary" },
          ],
        },
        { label: "Components", slug: "components" },
        {
          label: "Decisions",
          items: [
            { label: "Overview", slug: "decisions" },
            { label: "0001 Runtime depends on communication", slug: "decisions/0001-runtime-depends-on-communication" },
            { label: "0002 Claims and leases", slug: "decisions/0002-claims-and-leases" },
            { label: "0003 Worktrees through the runtime", slug: "decisions/0003-worktrees-through-the-runtime" },
            { label: "0004 Opaque service keys", slug: "decisions/0004-opaque-service-keys" },
          ],
        },
      ],
    }),
  ],
});
