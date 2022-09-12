const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
const postCssConfig = [
   require("postcss-import"),
   require("tailwindcss"),
   // require('autoprefixer'),
];

// mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', postCssConfig);
const ADMIN_MAIN_FILE = "src/ControlPanel/main.js";
const ADMIN_CSS_FILE = "src/ControlPanel/main.css";

mix.js(ADMIN_MAIN_FILE, "public/static/").react().extract([
   "react",
   "react-dom",
   "tailwindcss",
   "lodash",
   "axios",
   // '@inertiajs/inertia',
   // '@inertiajs/inertia-react',
   "formik",
   // "react-headroom",
]);
// mix.postCss(ADMIN_CSS_FILE, 'public/static/', postCssConfig);
