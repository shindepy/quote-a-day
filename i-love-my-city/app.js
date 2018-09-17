const express = require( 'express' );
const path = require( 'path' );
const indexRouter = require( './routes/index' );

const app = express();

app.set( 'views', path.join( __dirname, 'template' ) );
app.set( 'view engine', 'ejs' );

// static path
app.use( express.static( path.join( __dirname, 'common' ) ) );

app.use( '/', indexRouter );

app.listen( 5000 ); 