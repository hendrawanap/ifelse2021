//webpack.mix.js
const mix = require('laravel-mix');
const env = require('minimist')(process.argv.slice(2));

if (env.admin) {
    require(`${__dirname}\\webpack.admin.js`);

    return;
}

mix.js('resources/js/app.js', 'js/app.js').vue();
mix.js('resources/admin/main.js', 'js/main.js').vue();
// mix.sass('resources/sass/app.scss', 'public/css');

// mix.copyDirectory('node_modules/tinymce/icons', 'public/node_modules/tinymce/icons');
// mix.copyDirectory('node_modules/tinymce/plugins', 'public/node_modules/tinymce/plugins');
// mix.copyDirectory('node_modules/tinymce/skins', 'public/node_modules/tinymce/skins');
// mix.copyDirectory('node_modules/tinymce/themes', 'public/node_modules/tinymce/themes');
// mix.copy('node_modules/tinymce/jquery.tinymce.js', 'public/node_modules/tinymce/jquery.tinymce.js');
// mix.copy('node_modules/tinymce/jquery.tinymce.min.js', 'public/node_modules/tinymce/jquery.tinymce.min.js');
// mix.copy('node_modules/tinymce/tinymce.js', 'public/node_modules/tinymce/tinymce.js');
// mix.copy('node_modules/tinymce/tinymce.min.js', 'public/node_modules/tinymce/tinymce.min.js');
