define(['app'], function (app) {
  describe('app', function() {
    it('should exist', function() {
      expect(app).to.exist;
    });

    it('should be a Marionette app', function() {
      expect(app).to.be.an.instanceof(Marionette.Application);
    });
  });
});
