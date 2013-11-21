define(['app', 'entities/book'], function (App) {
  describe('book', function() {
    it('should respond to book:entity handler', function() {
      var bookRequest = App.request('book:entity');
      $.when(bookRequest).done(function(book) {
        expect(book).to.be.undefined;

        // When your endpoints are set up correctly, you should
        //  modify this to expect an instance of the model:
        // expect(book).to.be.an.instanceof(Entities.Book);
      });
    });

    it('should respond to book:entities handler', function() {
      var booksRequest = App.request('book:entities');
      $.when(booksRequest).done(function(books) {
        expect(books).to.be.undefined;

        // When your endpoints are set up correctly, you should
        //  modify this to expect an instance of the collection:
        // expect(books).to.be.an.instanceof(Entities.Books);
      });
    });
  });
});
