var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://10.11.0.90:8088/phones', false);

var phoneList;

xhr.onreadystatechange = function () {
	if (xhr.readyState != 4) return;

	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		phoneList = JSON.parse(xhr.responseText);
		createPhoneList(phoneList);
	}
};

xhr.send(JSON.stringify([
	{
		"name": "Lily",
		"number": "3454355"
	},
	{
		"name": "Lily",
		"number": "3454366"
	}
]));

function createPhoneList(listOfPhones) {
	listOfPhones.forEach(function (phone) {
		var li =
			document.createElement('li');

		li.innerHTML = phone.name + ': ' + phone.number;

		document.querySelector('ul').appendChild(li);
	});
}