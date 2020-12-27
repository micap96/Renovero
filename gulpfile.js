var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
    var server = gls.static('static'); 
    server.start();

    gulp.watch(['static/**/*.css', 'static/**/*.html', 'static/**/*.js'], function (file) {
        server.notify.apply(server, [file]);
        
        var timestamp = new Date().getHours() + ":" + new Date().getMinutes() + ":" +  new Date().getSeconds();
        console.debug(timestamp + " change detected");
    });
});
