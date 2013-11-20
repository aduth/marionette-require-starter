define([
  'marionette',
  'app'
], function(Marionette, app) {

  var Book = app.module('Book');

  Book.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'book/': 'listBooks'
    }
  });

  var API = {
    listBooks: function() {
      // NYI: List books
      console.log('List books');
    }
  };

  Book.addInitializer(function() {
    Book.router = new Book.Router({
      controller: API
    });
  });

  return Book;

});
