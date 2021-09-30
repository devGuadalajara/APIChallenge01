// Jose Gomez Camacho :) remoto
/*  Challenge 01
    1. The current date (GET)
    2. Your full name (GET)
    3. The city you live in (GET)
    4. Your school (GET)
    5. The sum of two numbers (POST)
    6. The multiplication of 3 numbers (POST)
    7. The area of a square (POST)
    8. The area of a triangle (POST)
*/
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const express = require( 'express' );  

const app = express();
const port = 40000;

app.use( bodyParser.json( { limit:'100mb' } ));
app.use( bodyParser.urlencoded(
    {
        extended: true,
        limit: '100mb'
    }
));

app.use( cors() );

app.all( '*', function( req , res , next )
{
    res.header( 'Access-Control-Allow-Origin' , '*' );
    res.header( 'Access-Control-Allow-Methods' , 'PUT,GET,POST,DELETE,OPTIONS' );
    res.header( 'Access-Control-Allow-Headers' , 'Content-Type' );
    next();
});

app.get( '/', function( req , res )
{
    res.send( 'BootcampMTY Arkus challenge' );
});

app.get( '/currentdate', function( req , res )
{
    const currentdate = Date.now(); 
    const today = new Date( currentdate );
    res.send( today.toDateString() );
});

app.get( '/fullname', function( req , res )
{
    res.send( 'Jose Gomez Camacho' );
});

app.get( '/city', function( req , res )
{
    res.send( 'Guadalajara' );
});

app.get( '/school', function( req , res )
{
    res.send( 'University of Guadalajara' );
});


app.post( '/sum2numbers' , function( req , res )
{
    const n1 = req.body.number1;
    const n2 = req.body.number2;
    var sum = parseFloat(n1) + parseFloat(n2);

    res.send( sum.toString() );
});

app.post( '/multiply3numbers' , function( req , res )
{
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const n3 = req.body.n3;
    let result = n1 * n2 * n3;

    res.send( result.toString() );
});


app.post( '/areasquare' , function( req , res )
{
    const side = req.body.side;
    let result = side * side;

    res.send( result.toString() );
});

app.post( '/areatriangle' , function( req , res )
{
    const base = req.body.base;
    const height = req.body.height;
    let result = (base * height) / 2;

    res.send( result.toString() );
});

app.listen( port, function()
{
    console.log( 'Running at port: ' + port );
    console.log( '--Challenge 01-- 30/09/2021' );
})