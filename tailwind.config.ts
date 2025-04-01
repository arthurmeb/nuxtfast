import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        custom: ['Poppins']
      },
    },
  },
  daisyui: {
    themes: ["light"], // Force light mode
    base: true,        // Keep base styles
    darkTheme: "light" // Prevent DaisyUI from auto-switching to dark
  },
};
