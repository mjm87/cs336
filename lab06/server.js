/**
 * 
 */

const express = require('express');
const app = express();
const http_status = require('http-status-codes');
const bodyParser = require('body-parser');

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 
// HTTP route and return code examples.

// GET
app.get('/requests', function(req, res) {
    res.status(http_status.OK);
    res.send("Received: GET");
});

// HEAD
app.head('/requests', function(req, res) {
    res.status(http_status.OK);
    res.send("Received: HEAD");
});

// PUT
app.put('/requests', function(req, res) {
    res.status(http_status.OK);
    res.send("Received: PUT " + req.body.data);
});

// POST
app.post('/requests', function(req, res) {
    res.status(http_status.OK);
    res.send("Received: POST " + req.body.data);
});

// DELETE
app.delete('/requests', function(req, res) {
    res.status(http_status.OK);
    res.send("Received: DELETE " + req.body.data);
});

// Responds to form posts from the forms/index.html example.
app.post('/forms', function(req, res) {
    res.send('Name: ' + req.body.user_name + 
            '\nE-mail: ' + req.body.user_mail +
            '\nMessage: ' + req.body.user_message);  
});


// other unsupported requests
app.all('*', function(req, res) {
    res.status(http_status.NOT_IMPLEMENTED);
    res.send("Received unsupported request");
});

// --------------------------------
// HTTP form example

// Setting the server up to listen
app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});
