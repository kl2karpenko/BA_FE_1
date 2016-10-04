"use strict";

function prost(start, end) {
	for (var i = start; i <= end; i ++) {
		for (var j = start; j <= end; j ++) {
			if (i % j > 0) {
				console.log(i, i % j, j)
			}
		}
	}
}

prost(2,10)

function Animal(name) {     // this = {};      // в this пишем свойства, методы     this.name = name;     this.canWalk = true;      // return this; }  var elephant = new Animal(‘Elephant');
	var dog = new Animal('Dog');