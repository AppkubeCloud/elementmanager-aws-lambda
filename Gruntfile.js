const sass = require('node-sass');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          'src/css/awslambda.dark.css': 'src/sass/awslambda.dark.scss',
          'src/css/awslambda.light.css': 'src/sass/awslambda.light.scss',
        },
      },
    },
  });

  grunt.registerTask('default', ['sass']);
};
