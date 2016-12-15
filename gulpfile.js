var browserify = require('browserify');
var browserSync = require('browser-sync').create();

/* translator for gulp (  Browserify ) */
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

/** 
 * Gulp and Gulp - Tools
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var environments = require('gulp-environments');

/** 
 * ============ ENVS ============ 
 */

var development = environments.development;
var production = environments.production;
/** 
 * load config file based on enviroment
 */
var configFile = production() ? "./src/env/prod.js" : "./src/env/dev.js";


/** 
 * Linter - JSHINT
 */
gulp.task('lint', function() {
    return gulp.src('./src/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

/** 
 * minify and concat any scripts into assets to public dir 
 */
gulp.task('scripts', function(){
    return gulp.src(['./src/assets/**/*.js',configFile])
            .pipe(uglify())
            .pipe(concat('vendor.min.js'))
            .pipe(gulp.dest('./public/'));
});

/** 
 * browserify requires OOHH YES! 
 */
gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./src/app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/'));
})

/** 
 * Copy scss files and html files to public generated folder
 */
gulp.task('copy', ['browserify','scss'], function() {
    gulp.src(['./src/**/*.html','./src/**/*.css'])
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
});

/** 
 * gulp-sass plug for scss pre-proccesor 
 */
gulp.task('scss', function() {
    gulp.src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/stylesheets/'));
});


gulp.task('build',['lint', 'scss', 'copy', 'scripts']);

gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./public",
            /**
             * The key is the url to match
             * The value is which folder to serve (relative to your current working directory)
             */
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        },
        browser:["google chrome", "firefox"]
    });
});


gulp.task('default', ['browser-sync'], function(){
    gulp.watch("./src/**/*.*", ["build"]);
    gulp.watch("./public/**/*.*").on('change', browserSync.reload);
})