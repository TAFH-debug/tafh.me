import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [heroui()]
}

export default config;