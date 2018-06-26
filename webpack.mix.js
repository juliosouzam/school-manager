let mix = require('laravel-mix');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/
mix.js('node_modules/jquery/src/jquery.js', 'public/vendor/js/');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.js('node_modules/jquery/src/jquery.js', 'public/vendor/js/jquery/jquery.min.js')
    .js('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/')
    .js('node_modules/bootstrap/js/dist/index.js', 'public/vendor/js/bootstrap/bootstrap.min.js')
    .js('node_modules/popper.js/dist/popper.js', 'public/vendor/js/popper/popper.min.js');

mix.copy('node_modules/sweetalert2/dist/', 'public/vendor/sweetalert2/');
