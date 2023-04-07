const { src, dest, watch, series } = require("gulp");
const prefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

const buildCSS = () => {
  return src(["sass/**/*.sass"])
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefixer("last 2 versions"))
    .pipe(dest("dist/css/"))
}

const watchTasks = () => {
  return watch("sass/**/*.sass", buildCSS);
}

exports.default = series(watchTasks, buildCSS);