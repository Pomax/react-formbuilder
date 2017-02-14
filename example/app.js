var React = require('react');
var ReactDOM = require('react-dom');

var ReactFormBuilder = require('../dist/react-formbuilder');
var Form = ReactFormBuilder.Form;

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
      onUpdate: (e,f,v) => this.onUpdate(e,f,v),
      onProgress: r => this.onProgress(r)
    };

    console.log(formProps.inlineErrors)

    return (
      <div>
        <h2>An example form:</h2>
        <Form ref="form" {...formProps} />
        <button onClick={e => this.submitForm(e)}>Submit</button> (<span>{this.state.ratio * 100}%</span> complete)
        <input type="checkbox" onClick={e => this.toggleInline()} checked={this.state.inlineErrors ? "checked" : null} /> show inline errors.

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
  onUpdate(evt, field, value) {
    let values = this.state.values;
    values[field.name] = value;
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
        return console.error("boo, form does not pass validation!");
      }
      // we're good to go, so do things with the form data, we've been
      // collecting through onUpdate. We can post it to a REST endpoint,
      // show it to the user, whatever we like.
      console.log("yay, we're good to go!", this.state.values);
    });
  }
};

// Get this app up and running on the page:
ReactDOM.render(<App/>, document.getElementById('app'));
