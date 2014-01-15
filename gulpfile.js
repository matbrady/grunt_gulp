var gulp = require('gulp');
var gulpLoadTasks = require("gulp-load-tasks");

// Load all gulp tasks
var tasks = gulpLoadTasks();

// TASK: Script
gulp.task('scripts', function() {
	return gulp
		.src([
			"js/**/*.js"
		])
		.pipe(tasks.uglify())
		.pipe(gulp.dest('gulp_build/js'));
});

gulp.task('sass', function() {
	return gulp
		.src("scss/*.scss")
		.pipe(tasks.sass())
		.pipe(gulp.dest('gulp_build/scss'));
});

// Default task.
gulp.task('default', function() {
	gulp.run('scripts', "sass");
});

