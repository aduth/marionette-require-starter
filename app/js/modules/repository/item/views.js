define([
  'marionette',
  'app',
  'hbs!modules/repository/item/templates/item'
], function(Marionette, App, tmplRepositoryItem) {

  var Repository = App.module('Repository');

  Repository.Item = { };

  Repository.Item.ItemView = Marionette.ItemView.extend({
    template: tmplRepositoryItem,

    events: {
      'click .return-to-list': 'returnToList'
    },

    returnToList: function() {
      App.request('repository:show:list');
    }
  });

  return Repository;

});
