(function () {
	$.fn.onHoverChange = function (options) {
		var defaults = {
			color: "blue",
			leaveColor: ""
		};

		this.each(function () {
			options = $.extend(defaults, options);

			$(this).hover(
				function () {
					$(this).css('color', options.color);
				},
				function () {
					$(this).css('color', options.leaveColor);
				}
			);

		});

	};

	$('#hover').onHoverChange();

	$('#trt').onHoverChange({
		color: "yellow",
		leaveColor: 'red'
	});
})($);