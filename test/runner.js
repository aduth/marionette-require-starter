require.config({

  baseUrl: '../app/js',

  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    marionette: 'vendor/marionette/lib/backbone.marionette',
    handlebars: 'vendor/handlebars/handlebars',
    hbs: 'vendor/hbs/hbs',
    json2: 'vendor/hbs/hbs/json2',
    i18nprecompile: 'vendor/hbs/hbs/i18nprecompile',

    spec: '../../test/spec'
  },

  hbs: {
    disableI18n: true
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
    handlebars: {
      exports: 'Handlebars'
    },
    mocha: {
      exports: 'mocha'
    }
  }

});

require([
  'backbone',
  'app'
], function(Backbone, App) {

  App.start();
  Backbone.history.stop();
  Backbone.history.start({ pushState: false });

  // Load specs
  require([
    'spec/test.app',
    'spec/test.repository'
  ], function() {
    window.mocha.run();
  });

});
