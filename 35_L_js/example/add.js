function List() {

}

// take mixins method
for(var key in eventMixin) {
	List.prototype[key] = eventMixin[key];
}

List.prototype.add = function() {
	var nameVal = nameValue.value;

	if (nameVal === "") {
		return;
	}

	var li = document.createElement('li');
	li.innerHTML = nameVal;
	li.className = "list-group-item";

	nameValue.value = "";

	names.appendChild(li);

	this.trigger("addName", nameVal);
};

var persons = new List();

persons.on('addName', function (nameVal) {
	alert("You add new person with name: " + nameVal);
});

addName.addEventListener('click', persons.add.bind(persons));


