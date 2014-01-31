var gulp = require('gulp');

var concat  = require('gulp-concat'),
		nodemon = require('gulp-nodemon'),
		sass    = require('gulp-sass');

gulp.task('server', function(){
	gulp.run('sass');
  var port = gulp.env.port || 5000;
  //console.log('gulp ' + port)
  nodemon({ script: 'server.js', options: '-e js,html,css,scss --watch app' });

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