module.exports = {
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
