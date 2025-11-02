/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF9933",
        "secondary": "#000080",
        "accent": {
          "green": "#22c55e",
          "gray": "#a9a9a9"
        },
        "background-light": "#f5f5f5",
        "background-dark": "#101722",
        "surface-light": "#ffffff",
        "surface-dark": "#18212f",
        "border-light": "#dbdfe6",
        "border-dark": "#374151"
    },
    fontFamily: {
        "display": ["Inter"]
    },
    borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
    },
    },
  },
  plugins: [],
}
