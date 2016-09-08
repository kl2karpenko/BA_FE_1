// States in components (intercative UI)

// ## 1 Creating state object

// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			name: "Anonym"
// 		}
// 	},
//
// 	render: function () {
// 		return <div>Hello {this.state.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 2 Changing state object

// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			name: "Anonym"
// 		}
// 	},
//
// 	onChange: function (event) {
// 		// this here is not an input, it is a link to App object
//
// 		this.setState({
// 			name: event.target.value
// 		});
// 	},
//
// 	render: function () {
// 		return <div className="form-group">
// 			<div>
// 				<input
// 					type="text"
// 					onInput={this.onChange}
// 					value={this.state.name}
// 				/>
// 			</div>
//
// 			<div>Hello {this.state.name}!</div>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 3 Creating button with counter

// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			value: 1
// 		}
// 	},
//
// 	onClick: function () {
// 		// this here is not an input, it is a link to App object
//
// 		this.setState({
// 			value: ++this.state.value
// 		});
// 	},
//
// 	render: function () {
// 		return <div className="form-group">
// 			<div>Value val = {this.state.value}!</div>
// 			<button
// 				onClick={this.onClick}
// 				className="btn btn-warning"
// 			>+</button>
//
// 			<div style={{display: "none"}}>Create please here a button that will minus the value of state</div>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );