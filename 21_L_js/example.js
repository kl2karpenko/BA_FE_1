function printArgs() {
	// вызов arr.slice() скопирует все элементы из this в новый массив
	var args = [].slice.call(arguments);
	alert( args.join(', ') ); // args - полноценный массив из аргументов
}

printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир