module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [
        'app/js/**/*.js',
        '!app/js/vendor/**/*.js'
      ]
    },

    mocha: {
      index: ['test/index.html'],
      options: {
        run: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', ['jshint', 'mocha']);

};
