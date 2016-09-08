// ## 1 Separate login within components, adding one component into another

// var Button = React.createClass({
// 	onClick: function () {
//
// 		alert('Hello!');
//
// 	},
//
// 	render: function () {
// 		return <button
// 			className="btn btn-danger"
// 		  onClick={this.onClick}
// 		>Click me</button>
// 	}
// });
//
// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			name: "Anonym"
// 		}
// 	},
//
// 	render: function () {
// 		return <div>
// 			<div>Hello {this.state.name}!</div>
// 			<Button></Button>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 2 Passing params into component

// var Button = React.createClass({
// 	onClick: function () {
// 		alert('Hello!');
// 	},
//
// 	render: function () {
// 		return <button
// 			className="btn btn-danger"
// 		  onClick={this.onClick}
// 		>{this.props.text}</button>
// 	}
// });
//
// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			name: "Anonym"
// 		}
// 	},
//
// 	render: function () {
// 		return <div>
// 			<div>Hello {this.state.name}!</div>
// 			<Button text="Click me"></Button>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 3 Changing parent state from child component

var Button = React.createClass({
	onClick: function () {
		this.props.change("name", "Lily");
	},

	render: function () {
		return <button
			className="btn btn-danger"
		  onClick={this.onClick}
		>{this.props.text}</button>
	}
});

var App = React.createClass({
	getInitialState: function () {
		return {
			name: "Anonym"
		}
	},

	changeStateByName: function (name, state) {
		var stateChange = {};

		stateChange[name] = state;

		this.setState(stateChange);
	},

	render: function () {
		return <div>
			<div>Hello {this.state.name}!</div>
			<Button
				text="Click me"
				change={this.changeStateByName.bind(this)}
			/>
		</div>
	}
});

ReactDOM.render(
	<App/>,
	document.body
);