define([
  'marionette',
  'app',
  'modules/repository/list/views',
  'modules/repository/item/views',
  'entities/repository'
], function(Marionette, app) {

  var Repository = app.module('Repository');

  Repository.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'repository/': 'listRepositories',
      'repository/:owner/:name': 'showRepository'
    }
  });

  var API = {
    listRepositories: function() {
      var repositoriesRequest = app.request('repository:entities');

      $.when(repositoriesRequest).done(function(repositories) {
        var repositoriesView = new Repository.List.CollectionView({
          collection: repositories
        });

        app.listRegion.show(repositoriesView);
      });

      return repositoriesRequest;
    },

    showRepository: function(owner, name) {
      var repositoryRequest = app.request('repository:entity', owner, name);

      $.when(repositoryRequest).done(function(repository) {
        var layout = new Repository.Item.Layout();
        app.contentRegion.show(layout);

        var repositoryView = new Repository.Item.ItemView({
          model: repository
        });
        layout.content.show(repositoryView);
      });

      return repositoryRequest;
    },

    showNoRepositorySelected: function() {
      var noneSelectedView = new Repository.Item.NoneSelectedView();
      app.contentRegion.show(noneSelectedView);

      var defer = $.Deferred();
      defer.resolve();
      return defer.promise();
    }
  };

  app.reqres.setHandler('repository:show:list', function() {
    app.vent.trigger('repository:show:list');
    return API.listRepositories();
  });

  app.reqres.setHandler('repository:show:item', function(owner, name) {
    app.Router.navigate('/repository/' + owner + '/' + name);
    app.vent.trigger('repository:show:item', owner, name);
    return API.showRepository(owner, name);
  });

  app.reqres.setHandler('repository:show:nonitem', function() {
    app.vent.trigger('repository:show:nonitem');
    return API.showNoRepositorySelected();
  });

  app.reqres.setHandler('repository:shown:item', function() {
    if (typeof app.contentRegion.currentView !== 'undefined' &&
      app.contentRegion.currentView instanceof Repository.Item.ItemView &&
      typeof app.contentRegion.currentView.content.currentView !== 'undefined') {
      return app.contentRegion.currentView.content.currentView.model;
    }
  });

  Repository.addInitializer(function() {
    app.request('repository:show:list');
    app.request('repository:show:nonitem');

    Repository.router = new Repository.Router({
      controller: API
    });
  });

  return Repository;

});
