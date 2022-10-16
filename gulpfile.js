const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');

function scss() {
	return src('./src/scss/style.scss')
		.pipe(sass())
		.pipe(csso())
		.pipe(concat('style.css'))
		.pipe(dest('./dist/css'))
}

function html() {
	return src('./src/index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
    	.pipe(dest('./dist'));
}

function js() {
	return src('./src/js/script.js')
		.pipe(minify())
		.pipe(dest('./dist/js'))
}

exports.scss = scss
exports.html = html
exports.js = js