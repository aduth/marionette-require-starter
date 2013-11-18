define([
  'backbone',
  'marionette'
], function(Backbone, Marionette) {

  var app = new Marionette.Application();

  app.on('initialize:after', function() {
    require([
      // Load Marionette sub-modules
    ], function() {
      Backbone.history.start({ pushState: true });
    });
  });

  return app;

});
