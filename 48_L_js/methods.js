(function ($) {

	var methods = {
		init: function (options) { },
		show: function () { },
		hide: function () { },
		update: function (content) { }
	};

	$.fn.tooltip = function (method) {

		// логика вызова метода
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод ' + method + ' в jQuery.tooltip не существует');
		}

	};

})(jQuery);