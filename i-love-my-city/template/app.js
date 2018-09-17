const express = require( 'express' );
const path = require( 'path' );
const indexRouter = require( './routes/index' );

const app = express();

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

// setup Express static file server middleware -  serve static files via this - eg. images, css files, js files etc. You can set up multiple folders and static files will be searched for in this order
app.use( express.static( path.join( __dirname, 'public' ) ) );
// app.use( express.static( path.join( __dirname, 'assets' ) ) );

app.use( '/', indexRouter );

app.listen( 3000 ); // no good practices followed here!!