/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "montserrat": "Montserrat",
        "nats": "Nats",
      },
      fontSize: {
        "clamp-ultrabig": "clamp(2.5rem,5vw,6rem)",
        "clamp-big": "clamp(2.25rem,4vw,4.5rem)",
        "clamp-title": "clamp(2rem,5vw,3.2rem)",
        "clamp-subtitle": "clamp(1.6rem,4vw,2.5rem)",
        "clamp-text": "clamp(1.1rem,4vw,1.25rem)",
      },
      keyframes: {
        argatoken: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px white)' },
          '50%': { filter: 'drop-shadow(0 0 18px white)' },
        }
      }
    },
  },
  plugins: [],
};
