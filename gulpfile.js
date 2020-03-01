const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCss = require("gulp-csso");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
sass.compiler = require("node-sass");

function css() {
    return gulp.src("./*.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./"));
}

function js() {
    return gulp.src("./slider.js")
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("./"));
}

async function build() {
    css();
    js();
}

exports.build = build;