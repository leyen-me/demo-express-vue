/** @type {import('tailwindcss').Config} */
import path from "path";

export default {
  content: [path.resolve(__dirname, "./src/**/*.{js,ts,vue}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
