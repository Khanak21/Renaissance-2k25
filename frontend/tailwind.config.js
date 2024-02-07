/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xlsm: { min: "0px", max: "450px" },
    },
    extend: {
      colors: {
        linkedin: "#2867B2",
        twitter: "#1DA1F2",
        facebook: "#4267B2",
        instagram: "#e95950",
        custom: {
          primary: withOpacity("--color-primary"), // Raisin Black (#27282A)
          secondary: withOpacity("--color-secondary"), // Beige (#EEF5DB)
          accent: withOpacity("--color-accent"), // Indian Red (#DB5461)
          warm: withOpacity("--color-warm"), // Jasmine (#FFDE89)
          dark: "#000000", // Black
          light: "#ffffff", // White
        },
      }, //usage: text-custom-accent
      backgroundColor: {
        custom: {
          primary: withOpacity("--bg-primary"),
          secondary: withOpacity("--bg-secondary"),
          accent: withOpacity("--bg-accent"),
          warm: withOpacity("--bg-warm"),
          dark: "#000000",
          light: "#ffffff",
        },
      }, //usage: bg-custom-dark
      borderColor: {
        custom: {
          primary: withOpacity("--border-primary"),
          secondary: withOpacity("--border-secondary"),
          accent: withOpacity("--border-accent"),
          warm: withOpacity("--border-warm"),
          dark: "#000000",
          light: "#ffffff",
        },
      }, //usage: border-custom-primary
      backgroundImage: {
        testimonial: "url('/EventPage/bggg-01.svg')",
      },

      keyframes: {
        animate: {
          "0%": {
            transform: "translateY(95vh) scale(0)",
          },

          "100%": {
            tranform: "translateY(-20vh) scale(1)",
          },
        },
      },

      animation: {
        linear_bubble: "animate 20s linear infinite;",
      },
    },
  },
  plugins: [],
};
