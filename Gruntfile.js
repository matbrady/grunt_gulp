/*global module:false*/
module.exports = function(grunt) {

  // Load all Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Grunt Configuration.
  grunt.initConfig({
    uglify: {
      all: {
        files: {
          'grunt_build/js/main.js': ["js/main.js"]
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ["uglify"]);
};
