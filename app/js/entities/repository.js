define([
  'app',
  'backbone'
], function(App, Backbone) {

  var Entities = App.module('Entities');

  //==============================
  // Entities
  //==============================

  Entities.Repository = Backbone.Model.extend({
    url: function() {
      return 'https://api.github.com/repos/' + this.get('owner').login + '/' + this.get('name');
    }
  });

  Entities.Repositories = Backbone.Collection.extend({
    model: Entities.Repository,
    url: 'https://api.github.com/search/repositories?q=stars:%3E0&sort=stars&per_page=10',
    parse: function(response) {
      return response.items;
    }
  });

  //==============================
  // API access layer
  //==============================

  var API = {
    getRepository: function(owner, name) {
      var repository = new Entities.Repository({
          owner: { login: owner },
          name: name
        }),
        defer = $.Deferred();

      repository.fetch({
        success: function(data) {
          defer.resolve(data);
        },
        error: function(data) {
          defer.reject();
        }
      });

      return defer.promise();
    },

    getRepositories: function() {
      var repositories = new Entities.Repositories(),
        defer = $.Deferred();

      repositories.fetch({
        success: function(data) {
          defer.resolve(data);
        },
        error: function(data) {
          defer.reject();
        }
      });

      return defer.promise();
    }
  };

  //==============================
  // Application handlers
  //==============================

  App.reqres.setHandler('repository:entity', function(owner, name) {
    return API.getRepository(owner, name);
  });

  App.reqres.setHandler('repository:entities', function() {
    return API.getRepositories();
  });

  return Entities;

});
