const gulp = require('gulp'),
    workbox = require('workbox-build'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', () => {
    browserSync.init(["assets/css/*.css", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sw', () => {
    return workbox.generateSW({
        globDirectory: './',
        globPatterns: ['**\/*.{html,js,css,png,jpg,eot,svg,ttf,woff,woff2,otf,ico,json,xml}'],
        globIgnores: ['images/original/**\/*.*', 'node_modules/**\/*.*', 'package**.json'],
        swDest: './sw.js',
        clientsClaim: true,
        skipWaiting: true
    }).then(() => {
        console.info('Service worker generation completed.');
    }).catch((error) => {
        console.warn('Service worker generation failed: ' + error);
    });
});

gulp.task('default', ['browser-sync']);