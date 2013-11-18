var connect = require('connect'),
  port = process.env.PORT || 3000;

connect()
  .use(connect.static('app'))
  .listen(port);

console.log('Application listening on port ' + port);
