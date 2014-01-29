var gulp = require('gulp');

var concat  = require('gulp-concat'),
		nodemon = require('gulp-nodemon'),
		sass    = require('gulp-sass');

gulp.task('server', function(){
	gulp.run('sass');

  nodemon({ script: 'server.js', options: '-e js,html,css --watch app' });

  gulp.watch('app/scss/app.scss', function(){
		gulp.run('sass');
  });

});


gulp.task('sass', function() {
  gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./app/css'));
});