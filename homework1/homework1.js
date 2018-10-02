const express = require('express')
const app = express()
const port = 3000

people = [
    {"id":2425366, "name":"Michel Momeyer", "years":3}, 
    {"id":0000042, "name":"Virginia Van Andel", "years":20},
    {"id":666, "occupation":"problem-child"}
];

// retrieves the person object from the database with the id specified in the url
function GetPerson(params){
    for(i in people) {
        let person = people[i];
        console.log(person);
        if(person.id == params.id){
            return person;
        }
    }
    return null;
}

app.use(express.static('public'))

// displays the list of all the people objects in the "database"
app.get('/people', (req, res) => res.json(people));

// displays the specified person object (if the person exists)
app.get('/person/:id', function(req, res) {
    let person = GetPerson(req.params);
    if (person != null) res.json(person);
    else res.sendStatus(404);
});

// displays the specified person's name (if it exists)
app.get('/person/:id/name', function(req, res) {
    let person = GetPerson(req.params);
    if (person != null && person.name != null) res.send("Name: " + person.name);
    else res.sendStatus(404);
});

// displays the specified person's "seniority"
app.get('/person/:id/years', function(req, res){
    let person = GetPerson(req.params);
    if (person != null && person.years != null) res.send("Name: " + person.years);
    else res.sendStatus(404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))