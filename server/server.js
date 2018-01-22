'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.NODE_ENV || 3000;



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
