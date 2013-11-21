require.config({

  deps: ['runner'],

  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    marionette: 'vendor/marionette/lib/backbone.marionette',
    handlebars: 'vendor/handlebars/handlebars',
    hbs: 'vendor/hbs/hbs',
    json2: 'vendor/hbs/hbs/json2',
    i18nprecompile: 'vendor/hbs/hbs/i18nprecompile'
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
    }
  }

});
