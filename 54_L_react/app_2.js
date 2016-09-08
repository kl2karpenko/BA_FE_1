// ## 1 Properties in components

// var App = React.createClass({
// 	render: function () {
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });

// ReactDOM.render(
// 	<App name="Lily"/>,
// 	document.body
// );

// ## 2 Define properties as default

// var App = React.createClass({
// 	getDefaultProps : function() {
// 		return {
// 			"name" : "anonymous"
// 		};
// 	},
//
// 	render: function () {
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 3 Define properties as default

// var App = React.createClass({
// 	getDefaultProps : function() {
// 		return {
// 			"name" : "anonymous"
// 		};
// 	},
//
// 	render: function () {
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );


// ## 4 Changing properties of component

var App = React.createClass({
	onClickButton: function () {
		this.props.name = "Lily!";
		console.log('Change property, but it wont change the DOM!');
	},

	render: function () {
		return <div>
			<div>Hello {this.props.name}!</div>
			<button
				className="btn btn-success"
				onClick={this.onClickButton}>
				Click here
			</button>
		</div>
	}
});

ReactDOM.render(
	<App name="Name"/>,
	document.body
);
