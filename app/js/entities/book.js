define([
  'app',
  'backbone'
], function(App, Backbone) {

  var Entities = App.module('Entities');

  //==============================
  // Entities
  //==============================

  Entities.Book = Backbone.Model.extend({ });

  Entities.Books = Backbone.Collection.extend({
    model: Entities.Book,
    url: '/api/book/'
  });

  //==============================
  // API access layer
  //==============================

  var API = {
    getBookById: function(bookId) {
      var book = new Entities.Book({ id: bookId }),
        defer = $.Deferred();

      book.fetch({
        success: function(data) {
          defer.resolve(data);
        },
        error: function(data) {
          defer.resolve(undefined);
        }
      });

      return defer.promise();
    },

    getBooks: function() {
      var books = new Entities.Books(),
        defer = $.Deferred();

      books.fetch({
        success: function(data) {
          defer.resolve(data);
        },
        error: function(data) {
          defer.resolve(undefined);
        }
      });

      return defer.promise();
    }
  };

  //==============================
  // Application handlers
  //==============================

  App.reqres.setHandler('book:entity', function(bookId) {
    return API.getBookById(bookId);
  });

  App.reqres.setHandler('book:entities', function() {
    return API.getBooks();
  });

  return Entities;

});
