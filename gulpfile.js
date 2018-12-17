const gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require("browser-sync"),
webpack = require("webpack-stream");


gulp.task("html", function() {
	return gulp.src("src/index.html")
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function() {
	return gulp.src("src/scripts/**/*.js")
	.pipe(webpack({
		output: {
		    filename: 'index.js',
		},
	 }))
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
	gulp.watch("src/**/*.js", gulp.parallel("js"));
	gulp.watch("src/styles/**/*", gulp.parallel("style"));
})

gulp.task("default", gulp.parallel("watch", "html", "js", "style", "server"))