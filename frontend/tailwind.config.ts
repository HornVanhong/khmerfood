import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        khmer: {
          green: {
            DEFAULT: "#244B36",
            dark: "#1A3627",
            light: "#316449",
            soft: "#DCE8DC",
            muted: "#EBF2EB",
          },
          gold: {
            DEFAULT: "#E9A94B",
            dark: "#C6852A",
            light: "#F3C57F",
          },
          cream: {
            DEFAULT: "#FAF7F0",
            dark: "#F0EAD6",
          },
          charcoal: {
            DEFAULT: "#333333",
            light: "#555555",
            muted: "#777777",
          },
        },
      },
      fontFamily: {
        khmer: ['"Noto Sans Khmer"', 'Hanuman', '"Khmer OS Battambang"', '"Khmer OS"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
