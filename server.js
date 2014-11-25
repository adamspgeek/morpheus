'use strict';

require('node-jsx').install();
var app = require('./lib');
app.run(function(data) {
  app.logger.info('Worker %s is running app@%s on port %d', process.pid, data.version, data.port);
});
