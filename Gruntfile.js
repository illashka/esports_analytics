/*module.exports = (grunt) => {
    //upload plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach((task)=>{
        grunt.loadNpmTasks(task);
    });

    //setting plugins
    grunt.initConfig({
        cafemocha: {
            all: {src: 'qa/tests-*.js', options: {ui: 'tdd'},}
        },
        jshint: {
            app: ['app.js']
        }
    })
}*/