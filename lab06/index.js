const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/requests', function(req, res) {
	res.send('Hello World!')
});

app.head('/requests', function(req, res){
	res.send('Got a HEAD request');
});

app.post('/requests', function(req, res) {
	res.send('Got a POST request')
});

app.put('/requests', function(req, res) {
	res.send('Got a PUT request')
});

app.delete('/requests', function(req, res) {
	res.send('Got a DELETE request')
});

app.all('/requests', function(req, res) {
	res.send('Pseudo-404: Please send a "proper" request.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
