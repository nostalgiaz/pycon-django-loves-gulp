import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import webpackProdConfig from './webpack-prod.config.babel';
import WebpackDevServer from 'webpack-dev-server';

gulp.task('default', ['server']);

gulp.task('babel', () => {
    return gulp.src('./js/**')
    .pipe(babel())
    .pipe(gulp.dest('target'));
})

gulp.task('test', ['babel'], () => {
    return gulp.src('./test/**.js')
    .pipe(mocha())
    .on('error', () => {
        gulp.emit('end');
    });
});

gulp.task('compile-static', (callback) => {
    webpack(webpackProdConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task('server', (callback) => {
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        inline: true
    }).listen(3000, '0.0.0.0', (err) => {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://0.0.0.0:3000');
    });
});
