'use strict';

const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.NODE_ENV || 8080;



// M I D D L E W A R E
app.use( bodyParser.urlencoded({
    extended: true
}));
app.use( bodyParser.json() );
app.use( express.static( path.join( __dirname, '../public' ) ) );

// R O U T E   C O N F I G
const friends = require( './routes/friends' );



app.use('/friends',friends);


app.listen( PORT, ()=> {
    console.log('listening on port:' + PORT);
});

module.exports = app;
