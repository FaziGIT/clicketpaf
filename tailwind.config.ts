import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-dark-blue': '#131620',
        'txt-dark-blue': '#9BA3BA',
        'main-dark-blue': '#181927',
        'card-dark-blue': '#000022',
        'img-yellow': "var(--sidebar-img)",
        'txt-soft-white' : "#ededed",
        'darkerShade': "#0a2f3d",
        'lighterSeal': "#1a5b72"
      },
      fontFamily: {
        'display': ['Oswald'],
        'mainTitle': ['Lato']
      }
    },
  },
  plugins: [],
} satisfies Config;
