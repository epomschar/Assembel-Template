module.exports = function(grunt){
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
                    partials: "templates/partials/*.hbs"
                },
                files: {
                    'www/': ["templates/pages/*.hbs"]
                }
            }
        },
        "jsbeautifier" : {
            files : ["www/*.html"],
            options : {
            }
        }
    });
    
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.registerTask('default', ['assemble', 'jsbeautifier'])
}