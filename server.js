const express = require('express'),
      cors = require('cors'),
      config = require('config'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      morgan = require('morgan'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      session = require('express-session');

// require dotenv to populate environment variables
require('dotenv').config();

// use bluebird for Mongoose promises
mongoose.Promise = require('bluebird');

// create express app
const app = express();

// build db uri
let dbURI = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds153501.mlab.com:53501/social-auth';

// change database uri if testing
if (config.util.getEnv('NODE_ENV') == 'test') {
    dbURI = 'mongodb://localhost:27017/baseauthtest';
}

// connect to the database
mongoose.connect(dbURI);

// on error
mongoose.connection.on('error', (err) => {
    console.info('Database error: ' + err);
});

// port number
const port = process.env.PORT || 8080;

// configure passport
require('./config/passport')(passport);

// use morgan logger except during testing
if (config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

// cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// set up express app
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(session({
    secret: 'chunkymonkey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// define routes
const users = require('./routes/users')(passport);

// routes
app.use('/api/users', users);

// catchall route to redirect to client/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// server start
app.listen(port, () => {
    console.info('Server listening on port %s\n', port);
});
