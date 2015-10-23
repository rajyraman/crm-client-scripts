import browserify from 'browserify';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import es from 'event-stream';
import babelify  from "babelify";

const $ = gulpLoadPlugins();

gulp.task('build', ['clean'], ()=>{
    glob('src/**/**form.js', function(err, files) {
        var tasks = files.map(function(entry) {
            let fileName = entry.substr(entry.lastIndexOf('/')+1).replace('.js','.bundle.js');
            return browserify({ 
                entries: [entry], 
                debug: true, 
                standalone: 'RYR' })
                .transform(babelify)
                .bundle()
                .pipe(source(fileName))
                .pipe(buffer())
                .pipe($.sourcemaps.init({loadMaps: true}))
                .pipe($.uglify({preserveComments: 'some'}))                   
                .pipe($.sourcemaps.write())
                .pipe(gulp.dest('build'));
            });
        return es.merge.apply(null, tasks);
    });
    gulp.watch(['src/**/**form.js'], ['clean','build']);
}); 
   
// Clean output directory
gulp.task('clean', cb => del(['.tmp', 'build/*', '!build/.git'], {dot: true}, cb));

gulp.task('default', ['build']);