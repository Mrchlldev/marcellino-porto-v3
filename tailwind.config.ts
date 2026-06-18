import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        retro: "8px 8px 0px #111111",
        retroSm: "4px 4px 0px #111111"
      }
    }
  },
  plugins: []
};

export default config;
