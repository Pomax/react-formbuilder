var React = require('react');
var ReactDOM = require('react-dom');

var Fields = require('./fields');
var fieldType = Fields.fieldType;

var Form = React.createClass({
  propTypes: {
    fields: React.PropTypes.objectOf(fieldType).isRequired,
    onProgress: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  // boilerplate
  getInitialState: function() {
    var initial = {};
    var fields = this.props.fields || {};

    this.progressFields = [];
    Object.keys(fields).forEach(name => {
      initial[name] = null;
      if (fields[name].type === "checkboxGroup") {
        initial[name] = [];
      }
      if (fields[name].metered) {
        this.progressFields.push(name);
      }
    });
    initial.valid = false;
    initial.errors = [];
    initial.errorElements = [];
    initial.hasValidated = false;
    return initial;
  },

  // boilerplate
  render: function() {
    let cn = this.props.className;
    let sm = this.props.submitting;
    let className = ("form " + (cn ? cn : '')).trim();

    return (
      <form className={className} hidden={this.props.hidden} disabled={this.props.submitting}>
        { Object.keys(this.props.fields).map(name => this.buildFormField(name, this.props.fields[name])) }
        { this.renderValidationErrors() }
      </form>
    );
  },

  // autofocus on anything that needs autofocussing.
  componentDidUpdate: function(prevProps, prevState) {
    var afelement = this.refs.autofocus;

    if (afelement) {
      afelement = ReactDOM.findDOMNode(afelement);
      afelement.focus();

      // We need to use the following code to get around
      // the bizar way in which react-select steals focus,
      // even when the browser has issued a .focus() on
      // a completely different HMTL element...
      function forceFocus() {
        if (afelement !== document.activeElement) {
          afelement.focus();
          setTimeout(forceFocus, 10);
        }
      }
      setTimeout(forceFocus, 100);
    }
  },

  // This is to be used for updating a progress bar...
  getProgress: function() {
    // get the number of required fields that have a value filled in.
    var keys = Object.keys(this.props.fields).filter(key => this.props.fields[key].metered !== false);
    var reduced = keys.reduce((a,b) => a + (this.hasFieldValue(b, this.state[b])? 1 : 0), 0);
    var total = keys.length;

    return reduced/total;
  },

  // This forms the object that is passed down into specific form field components
  formCommonObject: function(name, field) {
    field.name = name;

    var label = field.label,
        formfield = null,
        hasError = this.state.errorElements.indexOf(name) !== -1,
        labelClass = field.labelClassname ? field.labelClassname : '',
        inputClass = `${hasError ? 'error' : ''} ${field.fieldClassname || ''}`;

    var common = {
      name: name,
      field: field,
      multiplicity: field.multiplicity,
      value: this.state[name] || '',
      onChange: (e,v) => this.update(name, field, e, v),
      placeholder: field.placeholder,
      onUpdate: (e,n,f,v) => this.update(n,f,e,v),
      checkValidation: this.checkValidation
    };

    var shouldHide = false, choices = false, shouldFocus = false;

    // Is this a controlled field? If so, we need some extra code for
    // visibility toggling based on the controller's value
    if (field.controller) {
      var controller = field.controller.name;
      var controlValue = field.controller.value;

      if (this.props.fields[controller].type === "checkboxGroup") {
        shouldHide = this.state[controller].indexOf(controlValue) === -1;
      } else {
        shouldHide = this.state[controller] !== controlValue;
      }

      // should we be focussing on this field?
      if (!shouldHide && !this.state[name]) {
        shouldFocus = true;
      }
    }

    if (shouldHide) return null;

    // Do we need to auto-focus on this field? (NOTE: this gets a
    // bit weird if there are multiple autofocus elements!)
    if (shouldFocus) {
      common.ref = 'autofocus';
      inputClass += " controlled";
    }

    // Does this field come with an associated label?
    if (label) {
      let optional = '';
      // mark optional fields that have a label as being optional:
      if (field.optional) {
        optional = <span key={name + 'label-optional'} className="optional">(optional)</span>;
      }
      label = <label key={name + 'label'} className={labelClass}>{ label }{ optional }</label>;
    } else {
      label = null;
      inputClass += " nolabel";
    }

    // Make sure the input element className is set up properly
    inputClass = inputClass.trim();
    common.className = inputClass;
    common.labelClass = labelClass;

    return { common, label, labelClass };
  },

  // See if we need to generate validation errors inline.
  getInlineErrors: function(name) {
    if (!this.props.inlineErrors) return null;

    var errors = this.state.errors;
    if (errors.length > 0) {
      // there errors; are any for this particular element?
      var elements = this.state.errorElements;
      var pos = elements.indexOf(name);
      if (pos !== -1) {
        // this particular element has a validation error!
        return <div className="inline error">{ errors[pos] }</div>
      }
    }

    return null;
  },

  /**
   * Create the form field JSX definition to be used by React for rendering the form UI.
   * @param {string} name the form field name, based on its key in the this.props.field object
   * @param {fieldDefinition} field the field's associated field definition from this.props.fields
   * @returns {JSX} the UI code necessary to render the form field, as fieldset
   */
  buildFormField: function(name, field) {
    var Type = field.type,
        ftype = typeof Type,
        data = this.formCommonObject(name, field);

    // if there is no data, this is a hidden field!
    if (!data) return null;

    var common = data.common,
        label = data.label,
        labelClass = data.labelClass,
        formfield = false;

    if (ftype === "undefined" || Type === "text") {
      formfield = <Fields.Text {...common} />;
    }
    else if (Type === "textarea") {
      formfield = <Fields.TextArea {...common} />;
    }
    else if (Type === "checkbox") {
      formfield = <Fields.CheckBox {...common} label={label} labelClass={labelClass} />;
      label = null;
    }
    else if (Type === "choiceGroup") {
      formfield = <Fields.ChoiceGroup {...common} />;
    }
    else if (Type === "checkboxGroup") {
      formfield = <Fields.CheckBoxGroup {...common} />;
    }
    else if (Type === "image") {
      formfield = <Fields.Image {...common} />;
    }
    if (ftype === "function") {
      formfield = <Type {...field} {...common} />;
    }

    // If there are any errors, do we need to show errors inline?
    var inlineErrors = this.getInlineErrors(name);

    return <fieldset key={name + 'set'} className={name}>{ label }{ formfield }{ inlineErrors }</fieldset>;
  },

  /**
   * Records an update for a form element. Updates can be any kind of data,
   * as we do not know what is going to come rolling out of an onChange() event.
   * @param {fieldDefinition} field the field definition for a form field
   * @param {event} e the event associated with an onChange from an HTML element
   * @returns {undefined}
   */
  update: function(name, field, e, value) {
    var state = {};
    value = value ? value : e.target? e.target.value : undefined;

    // checkboxes use `checked`, not `value`
    if (field.type === "checkbox") {
      value = e.target? e.target.checked : false;
    }

    // checkboxGroups need to build an array of checkmark positions
    else if (field.type === "checkboxGroup") {
      var curval = this.state[name];
      var pos = curval.indexOf(value);

      if (pos === -1) {
        curval.push(value);
      } else {
        curval.splice(pos,1);
      }

      value = curval;
    }

    // record the updated value
    state[name] = value;

    // do we need to propagate the update?
    if (this.props.onUpdate) {
      this.props.onUpdate(e, name, field, value);
    }

    // finally, perform state change binding
    this.setStateAsChange(name, state);
  },

  /**
   * Similar to this.setChange, except with a bunch of event
   * handlers tied in due to needing to communicate certain
   * state changes to the parent component.
   * @param {string} fieldname the name of the field that's getting updated
   * @param {varied} newState the new value for this field
   * @returns {undefined}
   */
  setStateAsChange: function(fieldname, newState) {
    this.setState(newState, () => {
      // only revalidate on changes if we already validated before.
      if (this.state.hasValidated) {
        this.checkValidation();
      }
      if (this.props.onChange) {
        this.props.onChange(newState);
      }
      if (this.props.onProgress) {
        this.props.onProgress(this.getProgress());
      }
    });
  },

  /**
   * checkValidation is called by parents to intiate a validation
   * pass that both informs the parent of errors with the form,
   * and causes the form to show its validation result.
   * @returns {boolean} true if no errors occurred, otherwise false.
   */
  checkValidation: function() {
    return this.validates(valid => {
      if (this.props.validates) {
        this.props.validates(valid);
      }
    });
  },

  /**
   * Validates all form fields, records any errors, and then
   * updates the React state to show any validation errors.
   *
   * @param {function} postValidate the function to call after running validation
   * @returns {boolean} true if no errors were found, false otherwise.
   */
  validates: function(postValidate) {
    var state = this.state;
    var errors = [];
    var errorElements = [];
    var fields = this.props.fields || {};

    Object.keys(fields).forEach(name => {
      this.validateField(name, errors, errorElements);
    });

    this.setState({
      hasValidated: true,
      valid: (errors.length === 0),
      errors: errors,
      errorElements: errorElements
    }, () => {
      postValidate(this.state.valid);
    });

    return !errors.length;
  },

  /**
   * Validates a field and records whether it has an error, and if
   * so, to which UI element that error would apply. This function
   * records errors in-situ, rather than by return.
   * @param {string} name name of the field to validate
   * @param {array} errors a placeholder array for recording error messages
   * @param {array} errorElements a placeholder array for recording error elements
   * @returns {undefined}
   */
  validateField: function(name, errors, errorElements) {
    var value = this.state[name];
    var validators = this.props.fields[name].validator;

    if (!validators) {
      return;
    }

    if (!validators.forEach) {
      validators = [validators];
    }

    validators.forEach(validator => {
      var err = false;

      if (validator.validate) {
        err = validator.validate(value);
      } else {
        err = !this.hasFieldValue(name, this.state[name]);
      }
      if (err && this.passesControl(name)) {
        errors.push(validator.error);
        if (errorElements.indexOf(name)===-1) {
          errorElements.push(name);
        }
      }
    });
  },

  /**
   * Check whether this field "counts" towards form completion:
   *  - uncontrolled fields always count
   *  - controlled fields only count if their controller has the appropriate value
   *
   * @param {string} name the field name to test
   * @returns {boolean} whether or not this field counts towards form completion
   */
  passesControl: function(name) {
    var field = this.props.fields[name];
    var control = field.controller;

    if (!control) {
      return true;
    }

    var passes = false;

    if (this.props.fields[control.name].type === "checkboxGroup") {
      passes = this.state[control.name].indexOf(control.value) > -1;
    } else {
      passes = this.state[control.name] === control.value;
    }

    return passes;
  },

  /**
   * A field has a value if it's not null, falsey, an empty array, and the
   * field is not optional. In any of these cases, this field doesn't count
   * (and so reduces by adding 0 to the running tally, rather than 1).
   *
   * @param {string} name the field name
   * @param {anything} value the field's associated value
   * @returns {boolean} whether or not this field has an associated meaningful value
   */
  hasFieldValue: function(name, value) {
    if (value === null) {
      return false;
    }
    if (value === false) {
      return false;
    }
    if (value.length === 0) {
      return false;
    }
    return true;
  },

  /**
   * Get the CSS class for error reporting. This is hardcoded atm to "error".
   * @param {string} field the field name for which to determine whether there is an error.
   * @returns {string|boolean} "error" if the field has validation errors, false otherwise.
   */
  getErrorClass: function(field) {
    if (!this.state.errorElements) {
      return false;
    }

    var error = this.state.errorElements.indexOf(field) > -1;

    return error ? "error" : false;
  },

  /**
   * Render any validation errors in their own little error box.
   * @returns {JSX} the error box UI
   */
  renderValidationErrors: function() {
    if (!this.state.errors || this.state.errors.length === 0) {
      return null;
    }

    // handled in render on a per-field basis?
    if (this.props.inlineErrors) {
      return null;
    }

    var label = this.props.validationLabel || "Unfortunately, there are some problems with your form fields:";

    return (
      <div className="alert alert-danger">
        <p>{label}</p>
        <ul>{this.state.errors.map(function(text,i) { return <li key={i}>{text}</li>; })}</ul>
      </div>
    );
  }
});

module.exports = Form;
