var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync.init(["assets/css/*.css", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync']);