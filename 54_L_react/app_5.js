// ## 1 Working with collection

var phones = [ '14234324', '453456', '43563577257'];

// var App = React.createClass({
// 	getDefaultProps : function() {
// 		return {
// 			"phones" : []
// 		};
// 	},
//
// 	createListOfPhones: function () {
// 		return this.props.phones.map(function (phone) {
// 			return <li>{phone}</li>
// 		});
// 	},
//
// 	render: function () {
// 		return <ul>
// 			{this.createListOfPhones()}
// 		</ul>
// 	}
// });
//
// ReactDOM.render(
// 	<App phones={phones}/>,
// 	document.body
// );

// ## 2 Updating collection

var AddNewPhone = React.createClass({
	getInitialState: function () {
		return {
			phoneValue: ""
		}
	},

	addNew: function () {
		this.props.add(this.state.phoneValue);
		addNewPhone.value = "";
	},

	onChange: function (e) {
		this.setState({
			phoneValue: e.target.value
		});
	},

	render: function () {
		return <div className="form-group">
			<label htmlFor="addNewPhone">Add new phone</label>
			<input
				type="number"
				className="form-control"
				id="addNewPhone"
				defaultValue={this.state.phoneValue}
				onChange={this.onChange}
			/>

			<br/>
			<button className="btn btn-info pull-right" onClick={this.addNew}>+ Add</button>
		</div>
	}
});

var App = React.createClass({
	getInitialState: function () {
		return {
			phones: phones
		}
	},

	createListOfPhones: function () {
		return this.state.phones.map(function (phone) {
			return <li>{phone}</li>
		});
	},

	add: function (phoneNumber) {
		var Phones = this.state.phones;

		Phones.push(phoneNumber);

		this.setState({
			phones: Phones
		});
	},

	render: function () {
		return <div>
			<ul>
				{this.createListOfPhones()}
			</ul>
			<AddNewPhone add={this.add.bind(this)}/>
		</div>
	}
});

ReactDOM.render(
	<App/>,
	document.body
);