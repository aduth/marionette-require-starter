define([
  'backbone',
  'marionette',
  'router'
], function(Backbone, Marionette, AppRouter) {

  var App = new Marionette.Application();

  App.on('initialize:after', function() {
    Backbone.history.start({ pushState: true });
    var router = new AppRouter();
  });

  return App;

});
