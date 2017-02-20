var React = require('react');
var ReactDOM = require('react-dom');
var fieldType = require('./field-type.js');

const defaultRemoveLabel = "(-)";
const defaultAddLabel = "(+)";

var MultiplicityField = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    field: fieldType.isRequired
  },

  getInitialState: function() {
    var howmany = this.props.field.multiplicity;
    var values = (new Array(howmany)).join('|').split('|').map(_ => '');
    if (this.props.values) {
      this.props.values.forEach( (v,i) => {
        values[i] = v;
      });
    }
    return { multiplicity: howmany, values };
  },

  moreFields: function() {
    var multiplicity = this.state.multiplicity + 1;
    var values = this.state.values;
    values.push('');
    this.setState({ multiplicity, values });
  },

  removeField: function(pos) {
    var values = this.state.values;
    if (values.length === 1) {
      return;
    }
    var multiplicity = this.state.multiplicity - 1;
    values.splice(pos, 1);
    this.setState({ multiplicity, values });
  },

  render: function() {
    var values = this.state.values;
    return this.generateFields(this.props.name, this.props.field, values);
  },

  // geneate as many fields as are necessary for this one "thing"
  generateFields: function(name, field, values) {
    var fields = values.map((value, pos) => {
      return this.generateField(name, field, pos, value, e => this.updateField(e, name, field, pos));
    });
    return (
      <div className="multiple">
        { fields }
        <button type="button" className="add-field button" onClick={this.moreFields}>{
          this.props.field.addLabel ? this.props.field.addLabel : defaultAddLabel
        }</button>
      </div>
    );
  },

  // handler for when one of the fields gets updated
  updateField: function(e, name, field, position) {
    var newvalue = e.target.value;
    var values = this.state.values;
    values[position] = newvalue;
    this.setStateAsChange({ values }, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate(e, name, field, values);
      };
    });
  },

  // slightly modified wrt the <Form> component
  setStateAsChange: function(newState, andThenDoThis) {
    this.setState(newState, () => {
      this.props.checkValidation();
      if (this.props.onChange) {
        this.props.onChange(newState);
      }
      andThenDoThis();
    });
  },

  // there is a limited set of form fields that can be multiplicious
  generateField: function(name, field, position, value, onChange) {
    var Type = field.type,
        ftype = typeof Type,
        formfield = null,
        inputClass = field.fieldClassname || '';

    var common = {
      key: name + 'field' + position,
      placeholder: field.placeholder,
      value,
      onChange
    };

    // TODO: Should we factor in shouldFocus here?

    inputClass = (inputClass + " multiple").trim();

    if (ftype === "undefined" || Type === "text") {
      formfield = <input className={inputClass} type={Type? Type : "text"} {...common}/>;
    } else if (Type === "textarea") {
      formfield = <textarea className={inputClass} {...common}/>;
    }

    var removeButton = position > 0 ? <button type="button" className="remove-field button" onClick={() => this.removeField(position)}>{
      this.props.field.removeLabel ? this.props.field.removeLabel : defaultRemoveLabel
    }</button> : null;

    return <div key={name + '-row-' + position} className="row">{ formfield }{ removeButton }</div>;
  }

});

module.exports = MultiplicityField;
