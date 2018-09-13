/**
    Lab02 - 
    Based on the code from https://github.com/mjm87/cs336/script.js
 */


// Person
function Person(name, birthdate) {
    this.name = name;
    this.birthdate = new Date(birthdate);
    this.friends = [];
}

Person.prototype.changeName = function(name){
    this.name = name;
}

Person.prototype.getAge = function(){
    var today = new Date();
    var birthDate = this.birthdate;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// add friend
Person.prototype.addFriend = function(friend){
    this.friends.push(friend)
}

// TODO: consider adding a removeFriend()
// I mean what about the evenutality when someone dies. I don't really want to get birthday updates.

// greeting
Person.prototype.greet = function(){
	console.log("Mae govannen");
}

var me = new Person("Michel", "09/31/1996");
var friend = new Person("Alistair", "01/12/1996");
me.changeName("Ignatius");
me.addFriend(friend);
console.log(me);

console.log(me.getAge());

function Student(name, birthdate, subject){
	Person.call(this, name, birthdate);	
	this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.greet = function(){
	console.log("<<bashfully>>: Hi.");
}


var acquaintance = new Student("David", "08/19/1996", "Engineering");
console.log(acquaintance);


console.log("The acquaintance is a person: " , acquaintance instanceof Person);
console.log("The acquaintance is a student: " , acquaintance instanceof Student);
console.log("The friend is a person: " , friend instanceof Person);
console.log("The friend is a student: " , friend instanceof Student);

