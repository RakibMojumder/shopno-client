/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#7C3AED",
      },
    },
    screens: {
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "620px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1220px",
      "3xl": "1420px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
