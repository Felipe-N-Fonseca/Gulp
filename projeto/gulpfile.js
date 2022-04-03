const gulp = require('gulp')

function tarefasCSS(cb){
    return gulp.src('./vendor/**/*.css')
        .pipe(gulp.dest('./dist'))
}

exports.styles = tarefasCSS