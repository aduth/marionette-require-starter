var connect = require('connect'),
  fs = require('fs'),
  port = process.env.PORT || 3000;

connect()
  .use(connect.static('app'))
  .use(function(req, res) {
    var stream = fs.createReadStream(__dirname + '/app/index.html');
    stream.pipe(res);
  })
  .listen(port);

console.log('Application listening on port ' + port);
