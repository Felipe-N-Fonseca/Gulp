const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function tarefasCSS(cb){
    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/CSS'))
}
function tarefasJS(){
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/JS'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
