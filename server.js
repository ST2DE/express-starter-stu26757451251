var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser('123456789'));


var db = require('./models');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.listen(3000, function() {
  db.sequelize.sync();
});

var routes = require('./routes')(app);