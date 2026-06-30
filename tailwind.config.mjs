/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pride: {
          red: "#E40303",
          orange: "#FF8C00",
          yellow: "#FFD800",
          green: "#008026",
          blue: "#24408E",
          violet: "#732982",
          transblue: "#5BCEFA",
          pink: "#F5A9B8",
          brown: "#613915"
        },
        archive: {
          blue: "#263B59",
          navy: "#090E17",
          ink: "#191C22",
          gold: "#C8A76A",
          pale: "#F1ECE2",
          mist: "#E4E8EA"
        }
      },
      fontFamily: {
        latin: ["Cormorant Garamond", "Baskerville", "Georgia", "serif"],
        kai: ["Noto Serif TC", "Songti TC", "serif"],
        sans: ["Manrope", "Noto Sans TC", "sans-serif"]
      },
      boxShadow: {
        institutional: "0 30px 80px rgb(9 14 23 / 0.16)"
      }
    }
  },
  plugins: []
};
