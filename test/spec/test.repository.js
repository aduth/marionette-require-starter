define([
  'app',
  'entities/repository',
  'modules/repository/module'
], function (app, Entities) {
  describe('repository', function() {
    describe('repository:show:list', function() {
      var repositoriesViewRequest;

      before(function() {
        repositoriesViewRequest = app.request('repository:show:list');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoriesViewRequest).done(function() {
          done();
        });
      });

      it('should display a list of 10 items', function(done) {
        $.when(repositoriesViewRequest).done(function() {
          expect(app.listRegion.$el.find('li').length).to.equal(10);
          done();
        });
      });
    });

    describe('repository:show:item', function() {
      var repositoryViewRequest;

      before(function() {
        repositoryViewRequest = app.request('repository:show:item', 'aduth', 'marionette-require-starter');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoryViewRequest).done(function() {
          done();
        });
      });

      it('should display the correct heading text', function(done) {
        $.when(repositoryViewRequest).done(function() {
          expect(app.contentRegion.$el.find('h1').text()).to.equal('marionette-require-starter');
          done();
        });
      });
    });

    describe('repository:entity', function() {
      var repositoryRequest;

      before(function() {
        repositoryRequest = app.request('repository:entity', 'aduth', 'marionette-require-starter');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoryRequest).done(function(repository) {
          done();
        });
      });

      it('should be a Repository model', function(done) {
        $.when(repositoryRequest).always(function(repository) {
          expect(repository).to.be.an.instanceof(Entities.Repository);
          done();
        });
      });

      it('should contain the specified property values', function(done) {
        $.when(repositoryRequest).done(function(repository) {
          expect(repository.get('owner').login).to.equal('aduth');
          expect(repository.get('name')).to.equal('marionette-require-starter');
          done();
        });
      });
    });

    describe('repository:entities', function() {
      var repositoriesRequest;

      before(function() {
        repositoriesRequest = app.request('repository:entities');
      });

      it('should resolve the returned promise', function(done) {
        $.when(repositoriesRequest).done(function(repositories) {
          done();
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
