export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: { fadeIn: "fadeIn 0.4s ease" },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(12px)" },
          to:   { opacity: 1, transform: "translateY(0)" }
        }
      },
      fontFamily: { sans: ['Nunito', 'sans-serif'] }
    }
  },
  plugins: [],
}
