var gulp = require('gulp');

var concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
		minifyCSS   = require('gulp-minify-css'),
    nodemon     = require('nodemon'),
    processhtml = require('gulp-processhtml')
		sass        = require('gulp-sass');


gulp.task('server', function(){
	gulp.run('sass');
  var port = gulp.env.port || 8000;

  nodemon({
    'script': 'server.js',
    'env': {
      "PORT": port
    }
  });

  gulp.watch('app/scss/*.scss', function(){
		gulp.run('sass');
  });

});

gulp.task('sass', function() {
  gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('dist', function() {
  gulp.src('app/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/'));

  gulp.src(['app/js/*.js', 'app/vendor/jquery/jquery.min.js'])
    .pipe(gulp.dest('./dist/'));

  gulp.src('app/index.html')
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest('./dist'));

/*
  gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
*/
});