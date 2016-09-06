var User = {
	name: ko.observable('Bob'),

	age: ko.observable(45),

	phones: ko.observableArray([
		{ value: '435354644' },
		{ value: '23432534535' }
	]),

	tooltipText: ko.observable("This is user"),

	ageAdd: function () {
		this.age( this.age() + 1 );
	}
};