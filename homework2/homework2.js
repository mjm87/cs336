const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* In-memory database */
people = [
    {"id":2425366, "name":"Michel Momeyer", "years":3}, 
    {"id":0000042, "name":"Virginia Van Andel", "years":20},
    {"id":666, "occupation":"problem-child"}
];


// retrieves the person object from the database with the id specified in the url
function GetPerson(id){
    for(i in people) {
        let p = people[i];
        // ensuring we only return valid matches
        if(isAValidPerson(p)) {
            if(p.id == id){
                return p; 
            }
        }
    }
    return null;
}

// deletes any people with the given ID from the database
function DeletePerson(id){
    people = people.filter((person, idx, arr) => person.id != id);
}

// adds a person object to the person "database"
function AddPerson(query) {
    
    // create the new person object
    let person = {};
    person.id = query.id;
    person.name = query.name;
    person.years = query.years;

    // filter out any existing records for this person 
    DeletePerson(query.id);

    // add(or re-add) the person to the "database"
    if(isAValidPerson(person)){
        people.push(person);
        return person;
    }

    return null;
}

// validating that the given person contains at least
// an id a name and a seniority/years value
function isAValidPerson(person) {
    return (person.id != null && person.name != null && person.years != null);
}

app.use(express.static('public'))

// displays the list of all the people objects in the "database"
app.get('/people', (req, res) => res.json(people));

// adds a person to the "database"
app.post('/people', function (req, res) {
    if(AddPerson(req.body) != null) res.sendStatus(200);
    else res.sendStatus(404);
});

// displays the specified person object (if the person exists)
app.get('/person/:id', function(req, res) {
    let person = GetPerson(req.params.id);
    if (person != null) res.json(person);
    else res.sendStatus(404);
});

// creates a new person record
app.put('/person/:id', function (req, res) {
    if(AddPerson(req.body) != null) res.sendStatus(200);
    else res.sendStatus(404);
});

// creates a new person record
app.post('/person/:id', function (req, res) {
    if(AddPerson(req.body) != null) res.sendStatus(200);
    else res.sendStatus(404);
});

// delete a person record
app.delete('/person/:id', function (req, res) {
    DeletePerson(req.params.id);
    res.sendStatus(200);
});


// displays the specified person's name (if it exists)
app.get('/person/:id/name', function(req, res) {
    let person = GetPerson(req.params);
    if (person != null && person.name != null) res.json(person.name);
    else res.sendStatus(404);
});

// displays the specified person's "seniority"
app.get('/person/:id/years', function(req, res){
    let person = GetPerson(req.params);
    if (person != null && person.years != null) res.json(person.years);
    else res.sendStatus(404);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
