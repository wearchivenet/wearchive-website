/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        archive: {
          blue: "#063B74",
          navy: "#052A50",
          ink: "#172033",
          gold: "#C9A646",
          pale: "#F7F4EC",
          mist: "#EDF3F8"
        }
      },
      fontFamily: {
        latin: ["Baskerville", "Libre Baskerville", "Georgia", "serif"],
        kai: ["DFKai-SB", "KaiTi", "BiauKai", "Noto Serif TC", "serif"]
      },
      boxShadow: {
        institutional: "0 20px 60px rgb(5 42 80 / 0.12)"
      }
    }
  },
  plugins: []
};
