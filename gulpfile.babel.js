import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import WebpackDevServer from 'webpack-dev-server';
import sourcemaps from 'gulp-sourcemaps';


gulp.task('default', ['server', 'watch']);

gulp.task('babel', () => {
  return gulp.src('./js/**')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'react'],
      compact: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch', function() {
  gulp.watch(['./js/**'], ['babel']);
});

gulp.task('server', ['babel'], (callback) => {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
  }).listen(3000, '0.0.0.0', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://0.0.0.0:3000');
  });
});