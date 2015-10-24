import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import es from 'event-stream';

const $ = gulpLoadPlugins();

gulp.task('build', ['clean'], ()=> {
    glob('src/**/**form.ts', function(err, files) {
        var tasks = files.map(function(entry) {
            let fileName = entry.substr(entry.lastIndexOf('/')+1).replace('.ts','.bundle.js');
            return gulp.src([entry]) 
                .pipe($.tsc({keepTree: false, out: fileName}))
                .pipe(buffer())
                .pipe($.sourcemaps.init({loadMaps: true}))
                .pipe($.uglify({preserveComments: 'some'}))                   
                .pipe($.sourcemaps.write())                
                .pipe(gulp.dest('build'));
            });
        return es.merge.apply(null, tasks);
    });
    gulp.watch(['src/**/*.ts'], ['build']);
});
    
// Clean output directory
gulp.task('clean', cb => del(['.tmp', 'build/*', '!build/.git'], {dot: true}, cb));

gulp.task('default', ['build']);