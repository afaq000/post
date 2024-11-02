/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '80': '80px', // Custom blur value
      },
      boxShadow: {
        'custom': '1px 0px 1px 0px #00000033', // Custom shadow
        'custom-top-border': '0px -1px 0px 0px #00000033', // Custom top border shadow
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(108deg, rgba(243,253,255,1) 42%, rgba(153,232,251,1) 100%)',
        'RightSidbar-gradient': 'linear-gradient(108deg, rgba(153,232,251,1) 31%, rgba(243,253,255,1) 100%)', // Custom gradient
      },
     
    },
  },
  plugins: [],
}
