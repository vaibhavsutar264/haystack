/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js,ts,jsx,tsx}",
      // "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: 'Poppins'
         },
         aspectRatio: {
            '3/4': '3 / 4',
            '3.5/4': '3.5 / 4',
         },
         colors: {
            'blue': {
               100: '#DDF3FD',
               300: '#71BED7',
               600: '#3570d3',
               800: '#324767',
            },
            'gray': {
               100: '#efefef',
               // 300: '#71BED7',
               // 500: '#3570d3',
               // 600: '#3570d3',
            },
            light: 'gray',
            muted: '#5d5d5d',
         }
      },
   },
   plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
   ],
}
