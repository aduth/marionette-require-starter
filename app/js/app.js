define([
  'backbone',
  'marionette',
  'router'
], function(Backbone, Marionette, AppRouter) {

  var App = new Marionette.Application();

  App.addRegions({
    mainRegion: '#mainRegion'
  });

  App.on('initialize:after', function() {
    Backbone.history.start({ pushState: true });
    App.Router = new AppRouter();
  });

  return App;

});
