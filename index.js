cmd  = require('node-cmd');
nrc = require('node-run-cmd');
express = require('express');
bodyParser = require('body-parser')
assert = require('assert');
var morgan = require('morgan');
var app = express();
var route = require('./route/Router');
app.use(morgan('dev'));
app.use('/router',Router);

app.use(express.static(__dirname + '/public'));

app.listen(4444,'192.168.1.91', function(){
  console.log(`Server draait op: 192.168.1.91:4444`);
});

