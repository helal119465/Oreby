/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1600px',
      },
      fontFamily:{
        dm:[ 'DM Sans', 'sans-serif']
      },
      fontFamily:{
        Pop:[ 'Montserrat', 'inherit']
      },
    },
  },
  plugins: [],
}
//font-family: 'Poppins', sans-serif;
//font-family: 'Montserrat', sans-serif;