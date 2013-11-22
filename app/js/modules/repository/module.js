define([
  'marionette',
  'app',
  'modules/repository/list/views',
  'modules/repository/item/views',
  'entities/repository'
], function(Marionette, App) {

  var Repository = App.module('Repository');

  Repository.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'repository/': 'listRepositories',
      'repository/:owner/:name': 'showRepository'
    }
  });

  var API = {
    listRepositories: function() {
      var repositoriesRequest = App.request('repository:entities');

      $.when(repositoriesRequest).done(function(repositories) {
        var repositoriesView = new Repository.List.CollectionView({
          collection: repositories
        });

        App.mainRegion.show(repositoriesView);
      });

      return repositoriesRequest;
    },

    showRepository: function(owner, name) {
      var repositoryRequest = App.request('repository:entity', owner, name);

      $.when(repositoryRequest).done(function(repository) {
        var repositoryView = new Repository.Item.ItemView({
          model: repository
        });

        App.mainRegion.show(repositoryView);
      });

      return repositoryRequest;
    }
  };

  Repository.addInitializer(function() {
    Repository.router = new Repository.Router({
      controller: API
    });
  });

  App.reqres.setHandler('repository:show:list', function() {
    App.Router.navigate('/repository/');
    return API.listRepositories();
  });

  App.reqres.setHandler('repository:show:item', function(owner, name) {
    App.Router.navigate('/repository/' + owner + '/' + name);
    return API.showRepository(owner, name);
  });

  return Repository;

});
