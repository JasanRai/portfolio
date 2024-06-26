/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      tall: { raw: "(min-height: 800px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {},
    fontFamily: {
      signature: ["Dancing Script"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
