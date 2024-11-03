export const themes = Object.freeze({
  default: { id: "app-asset-prism-theme-default", name: "Default" },
  a11yDark: { id: "app-asset-prism-theme-a11y-dark", name: "A11y Dark" },
  atomDark: { id: "app-asset-prism-theme-atom-dark", name: "Atom Dark" },
  base16AtelierSulphurpoolLight: {
    id: "app-asset-prism-theme-base16-ateliersulphurpool-light",
    name: "Base16 Atelier Sulphurpool Light",
  },
  coldarkCold: {
    id: "app-asset-prism-theme-coldark-cold",
    name: "Coldark Cold",
  },
  coldarkDark: {
    id: "app-asset-prism-theme-coldark-dark",
    name: "Codark Dark",
  },
  darcula: { id: "app-asset-prism-theme-darcula", name: "Darcula Jetbrains" },
  dracula: { id: "app-asset-prism-theme-dracula", name: "Dracula" },
  duotoneDark: {
    id: "app-asset-prism-theme-duotone-dark",
    name: "Duotone Dark",
  },
  duotoneEarth: {
    id: "app-asset-prism-theme-duotone-earth",
    name: "Duotone Earth",
  },
  duotoneForest: {
    id: "app-asset-prism-theme-duotone-forest",
    name: "Duotone Forest",
  },
  duotoneLight: {
    id: "app-asset-prism-theme-duotone-light",
    name: "Duotone Light",
  },
  duotoneSea: { id: "app-asset-prism-theme-duotone-sea", name: "Duotone Sea" },
  duotoneSpace: {
    id: "app-asset-prism-theme-duotone-space",
    name: "Duotone Space",
  },
  ghcolors: { id: "app-asset-prism-theme-ghcolors", name: "GH Colors" },
  gruvboxDark: {
    id: "app-asset-prism-theme-gruvbox-dark",
    name: "Gruvbox Dark",
  },
  gruvboxLight: {
    id: "app-asset-prism-theme-gruvbox-light",
    name: "Gruvbox Light",
  },
  laserwave: { id: "app-asset-prism-theme-laserwave", name: "Laserwave" },
  lucario: { id: "app-asset-prism-theme-lucario", name: "Lucario" },
  materialDark: {
    id: "app-asset-prism-theme-material-dark",
    name: "Material Dark",
  },
  materialLight: {
    id: "app-asset-prism-theme-material-light",
    name: "Material Light",
  },
  materialOceanic: {
    id: "app-asset-prism-theme-material-oceanic",
    name: "Material Oceanic",
  },
  nightOwl: { id: "app-asset-prism-theme-night-owl", name: "Night Owl" },
  nord: { id: "app-asset-prism-theme-nord", name: "Nord" },
  okaidia: { id: "app-asset-prism-theme-okaidia", name: "Okaidia" },
  oneDark: { id: "app-asset-prism-theme-one-dark", name: "One Dark" },
  oneLight: { id: "app-asset-prism-theme-one-light", name: "One Light" },
  solarizedDarkAtom: {
    id: "app-asset-prism-theme-solarized-dark-atom",
    name: "Solarized Dark Atom",
  },

  synthwave84: {
    id: "app-asset-prism-theme-synthwave84",
    name: "Synthwave 84",
  },
  tomorrow: { id: "app-asset-prism-theme-tomorrow", name: "Tomorrow" },
  vs: { id: "app-asset-prism-theme-vs", name: "VS" },
});

export type PrismThemes = keyof typeof themes;
