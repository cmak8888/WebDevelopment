var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
http.createServer()

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirnam, "views"));
app.set('view engine', 'jade')