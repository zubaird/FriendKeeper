'use strict';

const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.NODE_ENV || 8000;



// M I D D L E W A R E
app.use( bodyParser.urlencoded({
    extended: false
}));
app.use( bodyParser.json() );
app.use( express.static( path.join( __dirname, '../public' ) ) );

// R O U T E   C O N F I G
const friends = require( './routes/friends' );
// const timeTracking = require( './routes/time-tracking' );
// const games = require( './routes/games' );
// const funds = require('./routes/funds');
//
app.use(friends);
// app.use( funds );
// app.use( '/users/:user_id/time/', timeTracking );
// app.use( '/users/:user_id/games/', games );


app.listen( PORT, ()=> {
    console.log('listening on port:' + PORT);
});

module.exports = app;
