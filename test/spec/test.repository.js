define(['app', 'entities/repository'], function (App, Entities) {
  describe('repository', function() {
    describe('repository:entity', function() {
      var repositoryRequest = App.request('repository:entity', 'aduth', 'marionette-require-starter');

      it('should resolve the returned promise', function(done) {
        $.when(repositoryRequest).done(function(repository) {
          done()
        });
      });

      it('should be a Repository model', function(done) {
        $.when(repositoryRequest).always(function(repository) {
          expect(repository).to.be.an.instanceof(Entities.Repository);
          done();
        });
      });
    });

    describe('repository:entities', function() {
      var repositoriesRequest = App.request('repository:entities');

      it('should resolve the returned promise', function(done) {
        $.when(repositoriesRequest).done(function(repositories) {
          done()
        });
      });

      it('should be a Repositories collection', function(done) {
        $.when(repositoriesRequest).always(function(repositories) {
          expect(repositories).to.be.an.instanceof(Entities.Repositories);
          done();
        });
      });

      it('should consist of 10 models', function(done) {
        $.when(repositoriesRequest).always(function(repositories) {
          expect(repositories.length).to.equal(10);
          done();
        });
      });
    });
  });
});
