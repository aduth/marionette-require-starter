define([
  'backbone',
  'marionette',
  'router'
], function(Backbone, Marionette, AppRouter) {

  var app = new Marionette.Application();

  app.on('initialize:after', function() {
    Backbone.history.start({ pushState: true });
    var router = new AppRouter();
  });

  return app;

});
