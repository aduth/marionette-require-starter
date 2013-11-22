module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'app',
          keepalive: true
        }
      }
    },

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

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('server', ['connect']);
  grunt.registerTask('test', ['jshint', 'mocha']);

};
