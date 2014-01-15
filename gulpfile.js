var gulp = require('gulp');
var gulpLoadTasks = require("gulp-load-tasks");

// Load all gulp tasks
var tasks = gulpLoadTasks();

gulp.task('scripts', function() {
	return gulp
		.src([
			"js/**/*.js"
		])
		.pipe(tasks.uglify())
		.pipe(gulp.dest('gulp_build/js'));
});

	
gulp.task('default', function() {
	gulp.run('scripts');
});

