const gulp=require('gulp');
const cssnano=require('gulp-cssnano');
const rev=require('gulp-rev');
const uglify=require('gulp-uglify-es').default;
//const uploadminify=require('gulp-imagemin');
const del=require('del');

gulp.task('css',function(done){
    console.log("minifing CSS...");
    gulp.src('./assests/**/*.css')
        .pipe(cssnano())
        .pipe(rev())
        .pipe(gulp.dest('./public/assests/'))
        .pipe(rev.manifest({
            cwd:"public",
            merge:true
        }))
        .pipe(gulp.dest('./public/assests'));
        done();
});

gulp.task('js',function(done){
    console.log("minifing JS...");
    gulp.src('./assests/**/*.js')
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./public/assests/'))
        .pipe(rev.manifest({
            cwd:"public",
            merge:true
        }))
        .pipe(gulp.dest('./public/assests'));
        done();
});

/*gulp.task('image',function(done){
    console.log("minifing IMAGE...");
    var img_src='./uploads/*';var img_dest='./public/assests';
    gulp.src(img_src)
        .pipe(uploadminify())
        .pipe(gulp.dest(img_dest))
        .pipe(rev.manifest({
            cwd:"public",
            merge:true
        }))
        .pipe(gulp.dest('./public/assests'));
        done();
});*/

//delete all file
gulp.task('clean',function(done){
    del.sync('./public/assests');
    done();
});

gulp.task('build',gulp.series('clean','css','js'/*,'image'*/),function(done){
    console.log("Build Assests Minify..");
    done();
});
