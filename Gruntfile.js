module.exports = function (grunt) {
    
    grunt.initConfig({
        jshint: {
    	    files: ['Gruntfile.js', '*.js', 'test/**/*.js'],
            filter: 'isFile',
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false) 
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
                },
                src: ['test/**/*.js']
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('default', ['jshint', 'mochaTest']);
};