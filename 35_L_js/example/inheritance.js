function Person(name) {
	this.name = name;
	this.speed = 0;
}

Person.prototype.run = function (speed) {
	this.speed += speed;
	console.log(speed);
};

Person.prototype.jump = function (speed) {
	this.speed += speed;
	console.log(speed);
};

function User(name) {
	Person.apply(this, arguments);
}

User.prototype.__proto__ = Person.prototype;

User.prototype.jump = function (speed, howHi) {
	Person.prototype.jump.call(this, speed);

	alert('User also can jump ' + howHi);
};

var Petya = new User();
Petya.run(35);
Petya.run(35);

Petya.jump(35, "very high");
