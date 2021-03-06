define([
  'marionette',
  'app',
  'hbs!modules/repository/item/templates/layout',
  'hbs!modules/repository/item/templates/item'
], function(Marionette, app, tmplRepositoryLayout, tmplRepositoryItem) {

  var Repository = app.module('Repository');

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
      app.request('repository:show:list');
    }
  });

  Repository.Item.ItemView = Marionette.ItemView.extend({
    template: tmplRepositoryItem
  });

  Repository.Item.NoneSelectedView = Marionette.View.extend({
    render: function() {
      this.$el.html('Select a repository from the left panel.');
      return this;
    }
  });

  return Repository;

});
