import path from "path";

/** @type {import('tailwindcss').Config} */
export default {
  content: [path.resolve(__dirname, "./src/**/*.{js,ts,vue}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
