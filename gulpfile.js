const gulp = require('gulp');
const connect = require('gulp-connect');
const webpack = require('gulp-webpack');;
const webpackConfig = require('./webpack.config.js');

gulp.task('build', (done) => {
    console.log('build');
    gulp.src(['./src/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./build'));
    done();
});

gulp.task('hello', (done) => {
    console.log('hello');
    done();
});

gulp.task('connect', (done) => {
    connect.server({
        root: [__dirname]
    });
    done();
});

gulp.task('watch', (done) => {
    gulp.watch(['./src/*.ts', 'typings/custome/*.d.ts'], gulp.series('hello'));
});

gulp.task('default', gulp.series(
    'build', 
//    'connect',
    'watch'
));