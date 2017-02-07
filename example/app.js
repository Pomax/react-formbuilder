var React = require('react');
var ReactDOM = require('react-dom');

var ReactFormBuilder = require('../dist/react-formbuilder');
var Form = ReactFormBuilder.Form;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: require('./fields'),
			values: {},
			submitting: false,
			ratio: 0
		};
	}

	render() {
		var formProps = {
			fields: this.state.fields,
			submitting: this.state.submitting,
			onUpdate: (e,f,v) => this.onUpdate(e,f,v),
			onProgress: r => this.onProgress(r)
		};

		return (
			<div>
				<h2>An example form:</h2>
				<Form ref="form" {...formProps} />
				<button onClick={e => this.submitForm(e)}>Submit</button> (<span>{this.state.ratio * 100}%</span> complete)
				<hr/>
				<h2>Form built off of the following definition:</h2>
				<pre>{ JSON.stringify(this.state.fields, false, 2) }</pre>
			</div>
		);
	}

	onUpdate(evt, field, value) {
		let values = this.state.values;
		values[field.name] = value;
		this.setState({ values });
	}

	onProgress(ratio) {
		this.setState({ ratio });
	}

	submitForm() {
		this.refs.form.validates(valid => {
			if (!valid) {
				return console.error("boo");
			}
			// we're good to go.
			let values = this.state.values;
		});
	}
};

ReactDOM.render(<App/>, document.getElementById('app'));
