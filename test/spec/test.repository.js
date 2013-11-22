define([
  'app',
  'entities/repository',
  'modules/repository/module'
], function (App, Entities) {
  describe('repository', function() {
    describe('repository:show:list', function() {
      var repositoriesViewRequest;

      before(function() {
        repositoriesViewRequest = App.request('repository:show:list');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoriesViewRequest).done(function() {
          done();
        });
      });

      it('should display a list of 10 items', function(done) {
        $.when(repositoriesViewRequest).done(function() {
          expect(App.mainRegion.$el.find('li').length).to.equal(10);
          done();
        });
      });
    });

    describe('repository:show:item', function() {
      var repositoryViewRequest;

      before(function() {
        repositoryViewRequest = App.request('repository:show:item', 'aduth', 'marionette-require-starter');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoryViewRequest).done(function() {
          done();
        });
      });

      it('should display the correct heading text', function(done) {
        $.when(repositoryViewRequest).done(function() {
          expect(App.mainRegion.$el.find('h1').text()).to.equal('marionette-require-starter');
          done();
        });
      });
    });

    describe('repository:entity', function() {
      var repositoryRequest;

      before(function() {
        repositoryRequest = App.request('repository:entity', 'aduth', 'marionette-require-starter');
      });

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
      var repositoriesRequest;

      before(function() {
        repositoriesRequest = App.request('repository:entities');
      });

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
