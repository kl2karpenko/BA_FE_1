ko.bindingHandlers.tooltip = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		console.log('update tooltip', valueAccessor());

		$(element).tooltip({
			title: valueAccessor()
		});
	},

	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		console.log('update tooltip', valueAccessor());

		$(element).tooltip({
			title: valueAccessor()
		});
	}
};