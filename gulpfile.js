var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");


gulp.task("html", function() {
	return gulp.src("src/index.html")
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function() {
	return gulp.src("src/index.js")
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("style", function () {
	return gulp.src("src/styles/**/*")
	.pipe(sass())
	.pipe(gulp.dest("dist/styles"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("server", function () {
	browserSync({
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task("watch", function() {
	gulp.watch("src/index.html", gulp.parallel("html"));
	gulp.watch("src/index.js", gulp.parallel("js"));
	gulp.watch("src/styles/**/*", gulp.parallel("style"));
})

gulp.task("default", gulp.parallel("watch", "html", "js", "style", "server"))