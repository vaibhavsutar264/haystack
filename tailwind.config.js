/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js,ts,jsx,tsx}",
      // "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         aspectRatio: {
            '3/4': '3 / 4',
         },
         colors: {
            'blue': {
               100: '#DDF3FD',
               300: '#71BED7',
               600: '#3570d3',
            },
         }
      },
   },
   plugins: [],
}
