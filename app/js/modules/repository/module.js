define([
  'marionette',
  'app',
  'modules/repository/list/views',
  'entities/repository'
], function(Marionette, App) {

  var Repository = App.module('Repository');

  Repository.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'repository/': 'listRepositories'
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
    }
  };

  Repository.addInitializer(function() {
    Repository.router = new Repository.Router({
      controller: API
    });
  });

  return Repository;

});
