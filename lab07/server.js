const express = require('express');
const app = express();

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));

// Setting the server up to listen
app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});
