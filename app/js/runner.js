require([
  'app'
], function(app) {

  // Initialize application
  app.start();

  // Pass document link clicks through Backbone.history
  $(document).on('click', 'a[href]:not([data-bypass])', function(e) {
    var href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
    var root = location.protocol + '//' + location.host + '/';

    if (href.prop.slice(0, root.length) === root) {
      e.preventDefault();
      Backbone.history.navigate(href.attr, true);
    }
  });

});