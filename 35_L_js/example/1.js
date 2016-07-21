function mul(a, b) {
	return a * b;
}

var double = bind(null, 2);

function bind(context) {
	var aArgs = Array.prototype.slice.call(arguments, 1);

	return function () {
		// TODO: refactor
		return func.apply(context, [].concat([aArgs, arguments]));
	};
}

var double = function mul(a, b) {
	return a * b;
};

double(9, 7, 8); // 2 * 9