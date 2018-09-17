const express = require( 'express' );
const cities = require( '../data/cities.json' );

const router = express.Router();

router.get( '/', function( req, res ) {
    res.render( 'index', {
        cities: cities
    });
});

router.get( '/:city', function( req, res ) {
    res.render( 'city', {
        cities: cities,
        city: req.params.city,
        details: cities[req.params.city]
    });
});

module.exports = router;