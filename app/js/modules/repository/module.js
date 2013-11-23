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

        app.mainRegion.show(repositoriesView);
      });

      return repositoriesRequest;
    },

    showRepository: function(owner, name) {
      var repositoryRequest = app.request('repository:entity', owner, name);

      $.when(repositoryRequest).done(function(repository) {
        var layout = new Repository.Item.Layout();
        app.mainRegion.show(layout);

        var repositoryView = new Repository.Item.ItemView({
          model: repository
        });
        layout.content.show(repositoryView);
      });

      return repositoryRequest;
    }
  };

  Repository.addInitializer(function() {
    Repository.router = new Repository.Router({
      controller: API
    });
  });

  app.reqres.setHandler('repository:show:list', function() {
    app.Router.navigate('/repository/');
    return API.listRepositories();
  });

  app.reqres.setHandler('repository:show:item', function(owner, name) {
    app.Router.navigate('/repository/' + owner + '/' + name);
    return API.showRepository(owner, name);
  });

  return Repository;

});
