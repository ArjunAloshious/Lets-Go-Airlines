const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser')
var randomstring = require("randomstring");
var nodemailer = require('nodemailer');
global.passengerCount;
global.selectedFlight;

const app = express()

app.use(express.static(__dirname));

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/home', function(req,res){
    res.sendFile('home.html', { root: __dirname })
});

app.get('/search', function(req,res){
    res.sendFile('search.html', { root: __dirname })
});

app.get('/fleet', function(req,res){
    res.sendFile('fleet.html', { root: __dirname })
});

app.get('/contact', function(req,res){
    res.sendFile('contact.html', { root: __dirname })
});

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'letsgo'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected');
})


// Upon submitting flight search parameters,
app.post('/search', function(req,res){

    var sql = "SELECT * FROM FlightDetails WHERE Origin = '"+req.body.origin+"' AND Destination = '"+req.body.destination+"' AND Date = '"+req.body.datepicker+"' ORDER BY Price ASC;";    

    connection.query(sql, function(err, rows, fields){
        if (err) throw err

        console.log('Passenger Count = '+req.body.pCount);
        global.passengerCount = req.body.pCount;
        console.log('Connected to FlightDetails table');
        res.render('index', { data: rows });
    })
});

app.post('/bookingPage', function(req,res){
    
    global.selectedFlight = req.body.FlightNumber;
    res.render('booking', { pCount: passengerCount });
});

app.post('/confirmation', function(req,res){

    var TripID = randomstring.generate(10);

     if ( global.passengerCount == 'count1' )
     {
        var sql = "INSERT INTO Trip(FlightNumber, TripID, FirstName, LastName, Age, Gender, Email, Phone) VALUES ('"+global.selectedFlight+"', '"+TripID+"', '"+req.body.firstName+"', '"+req.body.lastName+"', '"+req.body.age+"', '"+req.body.gender+"', '"+req.body.email+"', '"+req.body.phone+"');";    
        
        connection.query(sql, function(err, rows, fields){
            if (err) throw err
            
            console.log('Connected to Trip table');
        })

        var sql2 = "SELECT * FROM FlightDetails, Trip WHERE FlightDetails.FlightNumber = Trip.FlightNumber ORDER BY PassengerID DESC LIMIT 1;";

        connection.query(sql2, function(err, rows, fields){
            if (err) throw err
            
            console.log('Retrieving from Trip table');
            
            res.render( 'confirmation', { result: rows } );

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'letsgoairlines@gmail.com',
                    pass: 'letsgo747'
                }
            });
            
            var mailOptions = {
                from: 'letsgoairlines@gmail.com',
                to: 'arjunaloshious@gmail.com',
                subject: 'Booking Confirmation',
                html: "Hello Customer,<br><br>Thank You for choosing Let's Go Airlines. This is a confirmation mail with respect to your latest flight booking.<br><br>Have a safe journey ahead!"
            };
                        
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
                });
        })
     }

    else if ( global.passengerCount == 'count2' )
    {        
        var sql = "INSERT INTO Trip(FlightNumber, TripID, FirstName, LastName, Age, Gender, Email, Phone) VALUES ('"+global.selectedFlight+"', '"+TripID+"', '"+req.body.firstName+"', '"+req.body.lastName+"', '"+req.body.age+"', '"+req.body.gender+"', '"+req.body.email+"', '"+req.body.phone+"'), ('"+global.selectedFlight+"', '"+TripID+"', '"+req.body.firstName2+"', '"+req.body.lastName2+"', '"+req.body.age2+"', '"+req.body.gender2+"', '"+req.body.email2+"', '"+req.body.phone2+"');";    
 
        connection.query(sql, function(err, rows, fields){
            if (err) throw err
             
            console.log('Connected to Trip table');
        })
 
        var sql2 = "SELECT * FROM FlightDetails, Trip WHERE FlightDetails.FlightNumber = Trip.FlightNumber ORDER BY PassengerID DESC LIMIT 2;";
 
        connection.query(sql2, function(err, rows, fields){
            if (err) throw err
             
            console.log('Retrieving from Trip table');
 
            res.render( 'confirmation', { result: rows } );

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'letsgoairlines@gmail.com',
                    pass: 'letsgo747'
                }
            });
            
            var mailOptions = {
                from: 'letsgoairlines@gmail.com',
                to: 'arjunaloshious@gmail.com',
                subject: 'Booking Confirmation',
                html: "Hello Customer,<br><br>Thank You for choosing Let's Go Airlines. This is a confirmation mail with respect to your latest flight booking.<br><br>Have a safe journey ahead!"
            };
                        
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
                });
        })
    }
});

app.get('/flightschedules', function(req,res){

    var sql = "SELECT * FROM FlightDetails ORDER BY Date ASC;";

    connection.query(sql, function(err, rows, fields){
        if (err) throw err
    
        res.render( 'schedule', { result: rows } );
    })
});

app.use((req,res)=>{
    res.status(404).sendFile('404.html', { root: __dirname });
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
});