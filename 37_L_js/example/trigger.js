$(function () {

	$(document).on("buttonClick", function () {
		console.log(arguments);
	});

	$('select').on("change", function () {
		if (v == 1) {
			$('#').trigger('click');
		}

		alert('Hello!)');
	});

	$(document).trigger('domload');

});