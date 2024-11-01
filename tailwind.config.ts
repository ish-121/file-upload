import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': {
          light: "var(--custom-blue-light)",
          DEFAULT: "var(--custom-blue)",
          dark: "var(--custom-blue-dark)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
