var React = require('react');
var ReactDOM = require('react-dom');

var ReactFormBuilder = require('../dist/react-formbuilder');

var Form = ReactFormBuilder.Form;

var Fields = ReactFormBuilder.Fields

export class CustomInputField extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      chars: 0,
      textColor: 'green'
    }
  }

  onChange(e) {
    this.state.chars = e.target.value.length
    if(e.target.value.length < 51) {
      this.setState({
        textColor: 'green'
      })
    } else {
      this.setState({
        textColor: 'red'
      })
    }
    this.props.onChange(e)
  }

  render() {
    return (
      <div>
        <Fields.Text label={this.props.label} onChange={(e) => this.onChange(e)} />
        <div style={{ color: this.state.textColor }}>
          {this.state.chars}/51
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  /**
   * Set up an initial state and then try to fetch this file as text
   * so we can show the source code alongside the form and form definition.
   */
  constructor(props) {
    super(props);

    this.state = {
      fields: require('./fields'),
      values: {},
      submitting: false,
      ratio: 0,
      inlineErrors: true
    };

    fetch('./app.js').then(response => {
      response.text().then(sourceCode => {
        this.setState({ sourceCode });
      });
    })
  }

  toggleInline() {
    this.setState({ inlineErrors: !this.state.inlineErrors });
  }

  /**
   * Render a form, with its associated form definition data and the app's source code.
   */
  render() {
    // Composing the properties first makes code far easier to read.
    var formProps = {
      inlineErrors: this.state.inlineErrors,
      fields: this.state.fields,
      submitting: this.state.submitting,
      onUpdate: (e,n,f,v) => this.onUpdate(e,n,f,v),
      onProgress: r => this.onProgress(r)
    };

    // note that this needs to be "false", not "null". If "null" is
    // used, React throws a controlled/uncontrolled warning... =_=
    var checked = this.state.inlineErrors ? "checked" : false;

    var percentage = parseInt(this.state.ratio * 100);

    return (
      <div>
        <h2>An example form:</h2>
        <Form ref="form" {...formProps} />
        <button onClick={e => this.submitForm(e)}>Submit</button> (<span>{percentage}%</span> complete)
        <label><input type="checkbox" onChange={e => this.toggleInline()} checked={checked} /> show inline errors.</label>

        <hr/>

        <h2>Form built off of the following definition:</h2>
        <pre>{ JSON.stringify(this.state.fields, false, 2) }</pre>

        <hr/>

        <h2>App code used: </h2>
        <pre>{ this.state.sourceCode }</pre>
      </div>
    );
  }

  /**
   * Handle function for form data, triggered whenever the user modifies form values.
   */
  onUpdate(evt, name, field, value) {
    let values = this.state.values;
    values[name] = value;
    this.setState({ values });
  }

  /**
   * Handle function for form progress, updated whenever the user modifies form values.
   */
  onProgress(ratio) {
    this.setState({ ratio });
  }

  /**
   * "submit" function that checks whether the form passes validation, and if so,
   * does "something" with the data. We'll leave the "something" implied.
   */
  submitForm() {
    this.refs.form.validates(valid => {
      if (!valid) {
        return console.error("boo, form does not pass validation! Current data:", this.state.values);
      }
      // we're good to go, so do things with the form data, we've been
      // collecting through onUpdate. We can post it to a REST endpoint,
      // show it to the user, whatever we like.
      console.log("yay, we're good to go! Current data:", this.state.values);
    });
  }
};

// Get this app up and running on the page:
ReactDOM.render(<App/>, document.getElementById('app'));
