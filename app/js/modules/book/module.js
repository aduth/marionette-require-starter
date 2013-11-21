define([
  'marionette',
  'app',
  'modules/book/list/views',
  'entities/book'
], function(Marionette, App) {

  var Book = App.module('Book');

  Book.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'book/': 'listBooks'
    }
  });

  var API = {
    listBooks: function() {
      var booksRequest = App.request('book:entities');
      $.when(booksRequest).done(function(books) {
        var booksView = new Book.List.CollectionView({
          collection: books
        });

        App.mainRegion.show(booksView);
      });
    }
  };

  Book.addInitializer(function() {
    Book.router = new Book.Router({
      controller: API
    });
  });

  return Book;

});
