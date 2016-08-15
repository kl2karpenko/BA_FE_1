(function ($) {

	var methods = {
		init: function (options) {

			return this.each(function () {
				$(window).bind('resize.tooltip', methods.reposition);
			});

		},
		destroy: function () {

			return this.each(function () {
				$(window).unbind('.tooltip');
			})

		},
		reposition: function () {
		},
		show: function () {
		},
		hide: function () {
		},
		update: function (content) {
		}
	};

	$.fn.tooltip = function (method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод ' + method + ' не существует в jQuery.tooltip');
		}

	};

})(jQuery);