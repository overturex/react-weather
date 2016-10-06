var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function(){
    return browserify('./app/app.js')
        .transform(babelify, {'presets': ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('../build/js'));
});

gulp.task('watch', function(){
    gulp.watch('./app/**/*.js', ['browserify']);
});