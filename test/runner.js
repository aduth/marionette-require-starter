require.config({

  baseUrl: '../app/js',

  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    marionette: 'vendor/marionette/lib/backbone.marionette',
    Handlebars: 'vendor/handlebars/handlebars.amd',
    hbs: 'vendor/hbs/hbs',

    spec: '../../test/spec'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    },
    mocha: {
      exports: 'mocha'
    }
  }

});

require([
  'runner'
], function() {

  // Load specs
  require([
    'spec/test.app',
    'spec/test.book'
  ], function() {
    window.mocha.run();
  });

});
