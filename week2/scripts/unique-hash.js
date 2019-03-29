const gulp = require('gulp')
const rev = require('gulp-rev')
const revCollecter = require('gulp-rev-collector')

gulp.src(['public/*.{css,js,br,gz}'])
  .pipe(rev())
  .pipe(gulp.dest('public/'))
  .pipe(rev.manifest('rev-manifest.json'))
  .pipe(gulp.dest('public/'))

gulp.src(["public/rev-manifest.json", "views/layouts/default.hbs"])
  .pipe(revCollecter({ replaceReved: true }))
  .pipe(gulp.dest("views/layouts/"))