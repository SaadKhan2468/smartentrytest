/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'text-color':'#333333',  
        'border-clr':'#E3E3E3',  
        'bg-color':'#EFF4F1',  
        'links-color':'#0B0B29',  
        'heading-color':'#267FFE',  
      
      },

    },
  },
  plugins: [],
}