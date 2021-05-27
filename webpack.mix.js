require('dotenv').config();

const mix = require('laravel-mix');
const buildUrl = require('build-url');
const path = require('path');

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

 mix.webpackConfig({
    resolve: {
        // Needs to be added to resolve relative TypeScript modules
		modules: [
			'node_modules',
			path.resolve(__dirname, 'resources/ts')
		]
    }
 });

mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                API_URL: JSON.stringify(buildUrl(process.env.APP_URL, { path: 'api' })),
            })
        ]
    };
});


mix.ts('resources/ts/index.tsx', 'public/js')
   .extract(['react', 'react-dom'])
   .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps()
}
