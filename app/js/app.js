define([
  'backbone',
  'marionette',
  'router'
], function(Backbone, Marionette, AppRouter) {

  var app = new Marionette.Application();

  app.addRegions({
    listRegion: '#listRegion',
    contentRegion: '#contentRegion'
  });

  app.on('initialize:after', function() {
    var modules = ['repository'].map(function(module) {
      return 'modules/' + module + '/module';
    });

    require(modules, function() {
      app.Router = new AppRouter();
      if (!Backbone.History.started) {
        Backbone.history.start({ pushState: true });
      }
    });
  });

  return app;

});
