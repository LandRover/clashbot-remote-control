import gulp from 'gulp';
import config from '../config';

/**
 * Copy task runner
 */
gulp.task('copy:assets', () => {
    return gulp.src([config.path.assets.files])
        .pipe(gulp.dest(config.path.dist.assets));
});

