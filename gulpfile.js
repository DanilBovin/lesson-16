const gulp = require('gulp');
const sass = reqiure('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create()

gulp.task('styles', function() {
    return gulp.src('app/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.steam())
}) 

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: '/.'
        }
    })

    gulp.watch('app/scss/index.scss/scss', gulp.series('styles')); 
})
    
