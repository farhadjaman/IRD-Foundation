/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: `'Manrope', sans-serif`,
        rubik: `'Rubik', sans-serif`,
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#1FA45B",
        secondary: "#E8F0F5",
        grayLight: "#F7F8FA",
        textGray: "#868686",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        cardShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
