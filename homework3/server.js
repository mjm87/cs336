var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var app = express();

// Set the port to 3000
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var people;

// MongoDB query projections
let all_columns = {"id":1, "name":1, "years":1, "_id":0};   // SELECT *
let just_the_name = {"name":1, "_id":0};                    // SELECT name
let just_the_years = {"years":1, "_id":0};                  // SELECT years

// Displays the list of all the people objects in the "database"
app.get('/people', function(req, res) {
    let query = {};
    people.find(query, all_columns).toArray(
        (e, data) => res.json(data));
});

// Adds a person to the "database"
app.post('/people', function (req, res) {

    if(isValidReqBody(req)) {

        let person = {
            id:req.body.id, 
            name:req.body.name, 
            years:req.body.years
        };

        people.insertOne(person, function(error, results){
            if(error) {
                res.sendStatus(404);
                throw error;
            }
            res.sendStatus(200);
        });
    } else {
        // the req.body doesn't contain all required fields
        // so we'll indicate that it was a "bad request"
        console.log("Couldn't process: " + JSON.stringify(req.body));
        res.sendStatus(400);
    }
});

// Displays the specified person object (if the person exists)
app.get('/person/:id', function(req, res) {
    let query = { "id":req.params.id };
    people.findOne(query, all_columns, function(error, data){
        if(error) res.sendStatus(404);
        res.json(data);
    });
});

// Creates a new person record (or creates it)
app.put('/person/:id', function (req, res) {
    
    if(isValidReqBody(req)) {
        
        let person = {
            id:req.body.id, 
            name:req.body.name, 
            years:req.body.years
        };

        let query = { "id":req.params.id};
        people.updateOne(query, person, function(error, results){
            if(error) {
                res.sendStatus(404);
                throw error;
            }
            res.sendStatus(200);
        });
    } else {
        res.sendStatus(400);
    }
});

// Creates a new person record
app.post('/person/:id', function (req, res) {

    if(isValidReqBody(req)) {
        
        let person = {
            id:req.body.id, 
            name:req.body.name, 
            years:req.body.years
        };

        people.insertOne(person, function(error, results){
            if(error) {
                res.sendStatus(404);
                throw error;
            }
            res.sendStatus(200);
        });
    } else {
        res.sendStatus(400);
    }

});

// Delete a person record
app.delete('/person/:id', function (req, res) {

    let query = {"id":req.params.id};
    people.deleteOne(query, function(error, results){
        if(error) {
            res.sendStatus(404);
            throw error;
        } 
        res.sendStatus(200);
    });

});


// Displays the specified person's name (if it exists)
app.get('/person/:id/name', function(req, res) {
    let query = { "id":req.params.id };
    people.findOne(query, just_the_name, function(error, data){
        //if(error) res.sendStatus(404);
        if(error) {
            res.json(error);
            throw error;
        }
        res.json(data);
    });
});

// Displays the specified person's "seniority"
app.get('/person/:id/years', function(req, res){
    let query = { "id":req.params.id };
    people.findOne(query, just_the_years, function(error, data){
        if(error) res.sendStatus(404);
        res.json(data);
    });
});



// Load the MongoDB comments database
var mongoURL = 'mongodb://cs336:'+process.env.MONGO_PASSWORD+'@ds253783.mlab.com:53783/cs336';
MongoClient.connect(mongoURL, function(err, client) {
    if(err) throw err;
    people = client.collection('people');
    people.find().toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        // Start listening for clients
        app.listen(app.get('port'), function() {
            console.log('Server started: http://localhost:' + app.get('port') + '/');
        });
  })
});

// Helper function to double-check that all the required components are present
// to create a valid person record
function isValidReqBody(req){
    if(req.body.id == null) return false;
    if(req.body.name == null) return false;
    if(req.body.years == null) return false;
    return true;
}

