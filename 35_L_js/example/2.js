function name(index, c, g, t, k) {
	Array.prototype.forEach.call(arguments, function (i) {
		console.log(i);
	});
}

name(4, 5, 6, 7, 7, 8, 8);

var t = name.bind(window, 1, 2);
t();

name.call(window, 1, 2);
name.apply(window, [1, 2]);

// function logger(t) {
// 	console.groupCollapsed("name of user");
// 	console.info(this.name + t);
// 	console.groupEnd("name of user");
// }
//
// var Vasya = {
// 	name: "Vasya"
// };
//
// var Petya = {
// 	name: "Petya"
// };
//
// logger.call(Petya);
// logger.call(Vasya);

// TODO: add example
function bind(func, context) {
	console.log(arguments, "arguments 2");

	return function () { // (*)
		console.log(arguments, "arguments");
		return func.apply(context, arguments);
	};
}

function f() {
	alert(this);
}

var g = bind(f, window);
g(2, 3);
