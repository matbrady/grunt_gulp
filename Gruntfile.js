/*global module:false*/
module.exports = function(grunt) {

  // Load all Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

  });

  // Default task.
  grunt.registerTask('default', []);

};
