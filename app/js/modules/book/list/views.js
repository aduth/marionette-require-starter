define([
  'marionette',
  'app',
  'hbs!modules/book/list/templates/item'
], function(Marionette, app, tmplBookItem) {

  var Book = app.module('Book');

  Book.List = { };

  Book.List.ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: tmplBookItem
  });

  Book.List.CollectionView = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: Book.List.ItemView
  });

  return Book;

});
