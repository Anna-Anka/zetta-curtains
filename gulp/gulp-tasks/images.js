import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

const { argv } = plugins.yargs;
const production = !!argv.production;

plugins.gulp.task('images', () => {
    const result = plugins.gulp.src(paths.images.src)
        .pipe(plugins.gulpif(!production, plugins.newer(paths.images.app)))
        .pipe(plugins.gulpif(production, plugins.imagemin([
            plugins.imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2,
            }),
            plugins.imageminPngquant({
                speed: 5,
                quality: '70-90',
            }),
            plugins.imageminZopfli({
                more: true,
            }),
            plugins.imageminMozjpeg({
                progressive: true,
                quality: 90,
            }),
            plugins.imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true },
                ],
            }),
        ])))
        .pipe(plugins.gulp.dest(paths.images.app))
        .pipe(plugins.debug({
            title: 'Images',
        }))
        .pipe(plugins.browsersync.stream());
    return result;
});
