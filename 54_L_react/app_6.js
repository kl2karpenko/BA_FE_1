// ## Loading data via ajax

var App = React.createClass({
	getInitialState : function() {
		return {
			"phones" : []
		};
	},

	componentWillReceiveProps: function () {
		console.log('componentWillReceiveProps');

		// Invoked when a component is receiving new props. This method is not called for the initial render.
	},

	componentWillMount: function () {
		console.log('componentWillMount');

		// Invoked once, immediately before the initial rendering occurs.
	},

	componentDidMount: function () {
		console.log('componentDidMount');

		// trigers when component is loaded and rendered
		// Invoked once, immediately after the initial rendering occurs.

		$.get('./phones.json', function (data) {
			this.setState({
				phones: data.phones
			})
		}.bind(this));
	},

	componentWillUnmount: function () {
		console.log('componentWillUnmount');

		// Invoked immediately before a component is unmounted from the DOM.
	},

	shouldComponentUpdate: function () {
		console.log('shouldComponentUpdate');

		// Invoked before rendering when new props or state are being received.
	},

	componentWillUpdate: function () {
		console.log('componentWillUpdate');

		// Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
	},

	componentDidUpdate: function () {
		console.log('componentDidUpdate');

		// Invoked immediately after the component's updates are flushed to the DOM.
	},

	createListOfPhones: function () {
		return this.state.phones.map(function (phone) {
			return <li>{phone}</li>
		});
	},

	render: function () {
		return <ul>
			{this.createListOfPhones()}
		</ul>
	}
});

ReactDOM.render(
	<App/>,
	document.body
);