const mix = require('laravel-mix');

mix.scripts([
   'resources/js/my-script-console.js',
   'resources/js/my-script.js',
], 'public/js/my-app.js');

mix.styles([
   'resources/css/my-style.css',
   'resources/css/my-style-h1.css',
], 'public/css/my-app.css');

mix.sass('resources/sass/my-style-h1.scss','public/css/my-app.css');
