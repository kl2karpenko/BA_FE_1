$(function () {
	var $input = $('input');

	// $input.hover(function (e) {
	// 	console.log("on mouseenter");
	// }, function (e) {
	// 	console.log("on mouseleave");
	// // });
	//
	// $input.focus(function (e) {
	// 	console.log("focus");
	// });
	//
	// $input.blur(function (e) {
	// 	console.log("blur");
	// });
	//
	// $input.input(function (e) {
	// 	console.log("blur");
	// });
	//
	// $input.change(function (e) {
	// 	console.log("blur");
	// });
	//
	// $('li').on('click', 'li', function (e) {
	// 	console.log( this, e.target );
	// });
	//
	// $(document).on('click', 'button', function (e) {
	// 	console.log( this, e.target );
	// });

	$('button').on('click', function () {
		console.log( $input.val() );
	});

	// setTimeout(function () {
	// 	/**
	// 	 delete event listener
 	// 	 */
	// 	$('button').off('click', callbakconClick);
	// }, 10000);

	// /**
	//  * add event listener on VanilaJS
	//  *
	//  */
	// document.addEventListener('click', function (e) {
	// 	console.log(this, e.target);
	//
	// 	if (e.target === document.querySelector('button')) {
	// 		console.log("it is button");
	// 	}
	// });

	// $('button').click(function (e) {
	// 	console.log( $input.val() );
	// });

});