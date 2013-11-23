define([
  'marionette',
  'app',
  'hbs!modules/repository/item/templates/layout',
  'hbs!modules/repository/item/templates/item'
], function(Marionette, App, tmplRepositoryLayout, tmplRepositoryItem) {

  var Repository = App.module('Repository');

  Repository.Item = { };

  Repository.Item.Layout = Marionette.Layout.extend({
    template: tmplRepositoryLayout,

    regions: {
      content: ".content"
    },

    events: {
      'click .return-to-list': 'returnToList'
    },

    returnToList: function() {
      App.request('repository:show:list');
    }
  });

  Repository.Item.ItemView = Marionette.ItemView.extend({
    template: tmplRepositoryItem
  });

  return Repository;

});
