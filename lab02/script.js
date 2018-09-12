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

Person.prototype.addFriend = function(friend){
    this.friends.push(friend)
}

var me = new Person("Michel", "09/31/1996");
var friend = new Person("Alistair", "01/12/1996");
me.changeName("Ignatius");
me.addFriend(friend);
console.log(me);

console.log(me.getAge());


// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.area = function() {
//     return this.width * this.height;
// };
// var r1 = new Rectangle(1, 2, 1, 1);
// console.log(r1);
// console.log(r1.area());
// r1.move(2, 3);
// console.log(r1);

// // 10. ----------------------------------
// // Polymorphism
// function Circle(x, y, radius) {
//     Shape.call(this, x, y);
//     this.radius = radius;
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.area = function() {
//     return Math.PI * this.radius * this.radius;
// };
// var c1 = new Circle(1, 2, 1);
// console.log(c1.area());
