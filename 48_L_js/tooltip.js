(function () {
	$.fn.tooltip = function () {

		var defaults = {
			text: "please write smth in title attr"
		};

		this.each(function () {
			$(this).addClass('tooltip-wrap');

			$(this).hover(
				function () {
					var textForTooltip = $(this).attr('title') || defaults.text;

					if ($('.tooltip', this).length) {
						return;
					}

					$('<div/>', {
						"class": "tooltip",
						html: function () {
							return textForTooltip;
						}
					}).appendTo(this);
				},

				function () {
					$('.tooltip', this).remove();
				}
			);
		});
	};
})($);