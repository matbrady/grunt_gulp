var gp = {}; // gulp packages
// Load all Grunt tasks declared in the package.json file
var dep = require('matchdep').filterDev('gulp*').forEach(function(pkg){
	if (pkg !== "gulp") {
		var pkgName = pkg.replace("gulp-", "");
		gp[pkgName] = require(pkg);
		return gp[pkgName];
	}
	return gp[pkg] = require(pkg);
});

gp.gulp.task('scripts', function() {
	return gp.gulp
		.src([
			"js/**/*.js"
		])
		.pipe(gp.uglify())
		.pipe(gp.gulp.dest('build/js'));
});

	
gp.gulp.task('default', function() {
	gp.gulp.run('scripts');
});

