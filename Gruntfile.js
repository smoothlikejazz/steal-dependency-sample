module.exports = function (grunt) {

    grunt.initConfig({
        "steal-build": {
            default: {
                options: {
                    system: {
                        //config: "myapp/config.js",
                        config: "package.json!npm",
                        main: "myapp",
                        bundlesPath:"dist/bundles/",
                        baseUrl:"./myapp/"
                    },
                    buildOptions: {
                        minify: true,
                        sourceMaps: true,
                        bundleSteal : false,
                        bundleDepth: 3,
                        mainDepth: 3,
                        removeDevelopmentCode : true
                    }
                }
            }
        }
    });
    // http://stealjs.com/docs/steal-tools.grunt.build.html
    /*
     * Register All Necessary Tasks
     */
    grunt.registerTask('steal-build', ['steal-build']);
    grunt.registerTask("default", ["steal-build"]);

    /*
     * Load All Necessary Tasks
     */
    grunt.loadNpmTasks('steal-tools');
    //grunt.loadNpmTasks('documentjs');
};
