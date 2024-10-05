/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #c769fd, #5949cd)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

