const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
,
   ],

   theme: {
      extend: {
         fontFamily: {
            // sans: ['Nunito', ...defaultTheme.fontFamily.sans],
         },
      },
   },

   variants: {
      extend: {
         opacity: ['disabled'],
      },
   },

   plugins: [
      // require('@tailwindcss/forms'),
      // require('postcss-import'),
      // require('tailwindcss'),
      // require('autoprefixer'),
   ],
};
