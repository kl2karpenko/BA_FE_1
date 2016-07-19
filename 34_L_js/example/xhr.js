var xhr = new XMLHttpRequest();

xhr.open('GET', 'phones.json', false);

xhr.onreadystatechange = function () {
	if (xhr.readyState != 4) return;

	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		createPhoneList(xhr.responseText);
	}
};

xhr.send();

function createPhoneList(listOfPhones) {
	listOfPhones = JSON.parse(listOfPhones);

	document.body.appendChild(
		document.createElement('ul')
	);

	listOfPhones.forEach(function (phone) {
		var li =
			document.createElement('li');

		li.innerHTML = phone.name + ': ' + phone.number;

		document.body.appendChild(li);
	});
}