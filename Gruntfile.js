module.exports = function(grunt) {

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'js/src/*.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/metrenq.js'
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: '(function(){',
                footer: '})();',
                mangle: true
            },
            my_target: {
                files: {
                    'js/dist/metrenq.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        watch: {
            js: {
                files: ['js/src/*.js', 'Gruntfile.js'],
                tasks: ['jshint', 'concat', 'uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
    
};