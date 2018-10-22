const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// YAH - yet another helloworld
app.get('/hello', function(req, res) {
    res.json("Hello, " + req.query.name);
});

// Setting the server up to listen
app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});
