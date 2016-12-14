const gulp = require('gulp');
const connect = require('gulp-connect');
const webpack = require('gulp-webpack');;
const webpackConfig = require('./webpack.config.js');

gulp.task('build', () => {
    return gulp.src(['./src/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./build'));
});


gulp.task('connect', () => {
    connect.server({
        root: [__dirname]
    });
});

gulp.task('watch', () => {
    return gulp.watch('./src/*.ts', ['build']);
});

gulp.task('default', gulp.series(
    'build', 
    'connect',
    'watch'
));