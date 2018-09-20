/********************************************************************
 *
 * Lab02 - a little bit of javascript to play around with
 *         encapsulation, inheritance, and polymorphism
 *         using familiar "classes" for Person and Student.
 *
 * Based on the code from https://github.com/mjm87/cs336/script.js
 *
 * For CS-336 at Calvin College, Fall 2018
 *
 * Author: Michel Momeyer
 * Date: 09/12/2018
 * 
 *******************************************************************/

// ------------ //
// Exercise 2.1 //
// ------------ //

// Person Object
// provide name and birthdate
function Person(name, birthdate) {
    this.name = name;
    this.birthdate = new Date(birthdate);
    this.friends = [];
}

// Change Name
Person.prototype.changeName = function(name){
    this.name = name;
}

// Get Age 
// heavily based off of http://jsfiddle.net/codeandcloud/n33RJ/
Person.prototype.getAge = function(){
    var today = new Date();
    var birthDate = this.birthdate;	// tweaked to use Person.birthdate
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Add Friend
Person.prototype.addFriend = function(friend){
    this.friends.push(friend)
}

// Person Greeting
Person.prototype.greet = function(){
	console.log("Mae govannen"); 	// elvish for "Well met"
}

// ------------ //
// Exercise 2.2 //
// ------------ //

// Student Object : "subclass" of Person Object
// provide Person info + a subject
function Student(name, birthdate, subject){
	Person.call(this, name, birthdate);	
	this.subject = subject;
}

// A Student Greeting (overriding Person greeting)
Student.prototype = Object.create(Person.prototype);
Student.prototype.greet = function(){
	console.log("<<bashfully>>: Hi.");
}

// -------------------- //
// Some test code       // 
// Feel free to ignore  //
// -------------------- //
function runSampleTests() {

    // Define relevant people
    var michel = new Person("Michel", "09/31/1996");
    var alistair = new Person("Alistair", "01/12/1996");
    var peter = new Student("Peter", "06/10/1999", "Business");
    var people = [ michel, alistair, peter ];

    // Michel and Alistair meet and become friends
    michel.addFriend(alistair);
    alistair.addFriend(alistair);
    michel.addFriend(peter);

    console.log(michel);
    console.log("");

    // Michel changes his name
    console.log("He was born a " + michel.name + ".");
    michel.changeName("Brutus");
    console.log("But over the years his role has changed, and along with it, a new name: " + michel.name + ".\n");

    // How old is everyone?
    for(i in people) {
        var person = people[i];
        console.log(person.name + " is " + person.getAge() + " years old.");
    }

    console.log("");

    // Michel says hi
    michel.greet();

    // Peter says hi
    peter.greet();

    // Discriminating based off type
    console.log("");
    for(i in people) {
        var person = people[i];
        if(person instanceof Object) process.stdout.write(person.name + " is an Object")
        if(person instanceof Person) process.stdout.write(" and a Person");
        if(person instanceof Student) process.stdout.write(" and a Student");
        if(person instanceof Object) process.stdout.write(".\n");
    }
}

// comment out if you don't want all my extra junk output
runSampleTests();
