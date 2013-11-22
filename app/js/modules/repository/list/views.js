define([
  'marionette',
  'app',
  'hbs!modules/repository/list/templates/item'
], function(Marionette, App, tmplRepositoryItem) {

  var Repository = App.module('Repository');

  Repository.List = { };

  Repository.List.ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: tmplRepositoryItem
  });

  Repository.List.CollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: Repository.List.ItemView
  });

  return Repository;

});
