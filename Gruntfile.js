module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                assets: "./",
                flatten: true,
                data: "data/*.json"
            },
            project: {
                options: {
                    layout: "templates/layouts/layout.hbs",
                    partials: ['templates/partials/*.hbs', 'templates/partials/**/*.hbs']
                },
                files: {
                    'www/': ["templates/pages/*.hbs"]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    lineNumbers: true,
                    update: true,
                    style: 'expanded'
                },
                files: {
                    'www/css/styles.css': 'sass/styles.scss'
                }
            }
        },
        'jsbeautifier': {
            files: ['www/*.html']
        },
        watch: {
            assemble: {
                files: ['templates/**/*.hbs'],
                tasks: ['assemble']
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass']
            },
            beautify: {
                files: ['www/*.html'],
                tasks: ['jsbeautifier']
            }
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}