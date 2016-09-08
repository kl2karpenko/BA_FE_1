// ## 1 Creating 1 component

// var App = React.createClass({
// 	render: function () {
// 		return <div>Hello Lily!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 2 Add interaction to component

// var App = React.createClass({
// 	onClickButton: function () {
//
// 		alert('I am clicked');
//
// 		// here this is "App" object
// 	},
//
// 	render: function () {
// 		return <div>
// 			<div>Hello Lily!</div>
// 			<button
// 				className="btn btn-success"
// 				onClick={this.onClickButton}>
// 				Click here
// 			</button>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 3 Adding attributes to blocks

// var App = React.createClass({
// 	render: function () {
// 		return <div
// 			    className="row"
// 		      style={{ color: 'green', 'font-size': '15px' }}
//        >
// 			<div className="col-xs-6">Hello Lily!</div>
// 			<div className="col-xs-6">Goodbye</div>
//
// 			<button className="btn btn-success">Click here</button>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );
