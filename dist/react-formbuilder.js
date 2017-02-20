(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactFormBuilder"] = factory(require("react"), require("react-dom"));
	else
		root["ReactFormBuilder"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function cleanProps(props) {
  var cleaned = Object.assign({}, props);
  ['field', 'multiplicity', 'labelClass', 'onUpdate', 'checkValidation', 'key'].forEach(function (p) {
    return delete cleaned[p];
  });
  return cleaned;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);

var Fields = __webpack_require__(13);
var fieldType = Fields.fieldType;

var Form = React.createClass({
  displayName: 'Form',

  propTypes: {
    fields: React.PropTypes.objectOf(fieldType).isRequired,
    onProgress: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  // boilerplate
  getInitialState: function getInitialState() {
    var _this = this;

    var initial = {};
    var fields = this.props.fields || {};

    this.progressFields = [];
    Object.keys(fields).forEach(function (name) {
      initial[name] = null;
      if (fields[name].type === "checkboxGroup") {
        initial[name] = [];
      }
      if (fields[name].metered) {
        _this.progressFields.push(name);
      }
    });
    initial.valid = false;
    initial.errors = [];
    initial.errorElements = [];
    initial.hasValidated = false;
    return initial;
  },

  // boilerplate
  render: function render() {
    var _this2 = this;

    var cn = this.props.className;
    var sm = this.props.submitting;
    var className = ("form " + (cn ? cn : '')).trim();

    return React.createElement(
      'form',
      { className: className, hidden: this.props.hidden, disabled: this.props.submitting },
      Object.keys(this.props.fields).map(function (name) {
        return _this2.buildFormField(name, _this2.props.fields[name]);
      }),
      this.renderValidationErrors()
    );
  },

  // autofocus on anything that needs autofocussing.
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var afelement = this.refs.autofocus;

    if (afelement) {
      (function () {

        // We need to use the following code to get around
        // the bizar way in which react-select steals focus,
        // even when the browser has issued a .focus() on
        // a completely different HMTL element...
        var forceFocus = function forceFocus() {
          if (afelement !== document.activeElement) {
            afelement.focus();
            setTimeout(forceFocus, 10);
          }
        };

        afelement = ReactDOM.findDOMNode(afelement);
        afelement.focus();
        setTimeout(forceFocus, 100);
      })();
    }
  },

  // This is to be used for updating a progress bar...
  getProgress: function getProgress() {
    var _this3 = this;

    // get the number of required fields that have a value filled in.
    var keys = Object.keys(this.props.fields).filter(function (key) {
      return _this3.props.fields[key].metered !== false;
    });
    var reduced = keys.reduce(function (a, b) {
      return a + (_this3.hasFieldValue(b, _this3.state[b]) ? 1 : 0);
    }, 0);
    var total = keys.length;

    return reduced / total;
  },

  // This forms the object that is passed down into specific form field components
  formCommonObject: function formCommonObject(name, field) {
    var _this4 = this;

    field.name = name;

    var label = field.label,
        formfield = null,
        hasError = this.state.errorElements.indexOf(name) !== -1,
        labelClass = field.labelClassname ? field.labelClassname : '',
        inputClass = (hasError ? 'error' : '') + ' ' + field.fieldClassname;

    var common = {
      name: name,
      field: field,
      multiplicity: field.multiplicity,
      value: this.state[name] || '',
      onChange: function onChange(e, v) {
        return _this4.update(name, field, e, v);
      },
      placeholder: field.placeholder,
      onUpdate: function onUpdate(e, n, f, v) {
        return _this4.update(n, f, e, v);
      },
      checkValidation: this.checkValidation
    };

    var shouldHide = false,
        choices = false,
        shouldFocus = false;

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
      label = React.createElement(
        'label',
        { key: name + 'label', className: labelClass },
        label
      );
      // mark optional fields that have a label as being optional:
      if (field.optional) {
        label = [label, React.createElement(
          'span',
          { key: name + 'label-optional' },
          ' (optional)'
        )];
      }
    } else {
      label = null;
      inputClass += " nolabel";
    }

    // Make sure the input element className is set up properly
    inputClass = inputClass.trim();
    common.className = inputClass;
    common.labelClass = labelClass;

    return { common: common, label: label, labelClass: labelClass };
  },

  /**
   * Create the form field JSX definition to be used by React for rendering the form UI.
   * @param {string} name the form field name, based on its key in the this.props.field object
   * @param {fieldDefinition} field the field's associated field definition from this.props.fields
   * @returns {JSX} the UI code necessary to render the form field, as fieldset
   */
  buildFormField: function buildFormField(name, field) {
    var Type = field.type,
        ftype = typeof Type === 'undefined' ? 'undefined' : _typeof(Type),
        data = this.formCommonObject(name, field);

    // if there is no data, this is a hidden field!
    if (!data) return null;

    var common = data.common,
        label = data.label,
        labelClass = data.labelClass,
        formfield = false;

    if (ftype === "undefined" || Type === "text") {
      formfield = React.createElement(Fields.Text, common);
    } else if (Type === "textarea") {
      formfield = React.createElement(Fields.TextArea, common);
    } else if (Type === "checkbox") {
      formfield = React.createElement(Fields.CheckBox, _extends({}, common, { label: label, labelClass: labelClass }));
      label = null;
    } else if (Type === "choiceGroup") {
      formfield = React.createElement(Fields.ChoiceGroup, common);
    } else if (Type === "checkboxGroup") {
      formfield = React.createElement(Fields.CheckBoxGroup, common);
    }
    if (ftype === "function") {
      formfield = React.createElement(Type, _extends({}, field, common));
    }

    // See if we need to generate validation errors inline.
    var inlineErrors = null;
    if (this.props.inlineErrors) {
      var errors = this.state.errors;
      if (errors.length > 0) {
        // there errors; are any for this particular element?
        var elements = this.state.errorElements;
        var pos = elements.indexOf(name);
        if (pos !== -1) {
          // this particular element has a validation error!
          var inlineErrors = React.createElement(
            'div',
            { className: 'inline error' },
            errors[pos]
          );
        }
      }
    }

    return React.createElement(
      'fieldset',
      { key: name + 'set', className: name },
      label,
      formfield,
      inlineErrors
    );
  },

  /**
   * Records an update for a form element. Updates can be any kind of data,
   * as we do not know what is going to come rolling out of an onChange() event.
   * @param {fieldDefinition} field the field definition for a form field
   * @param {event} e the event associated with an onChange from an HTML element
   * @returns {undefined}
   */
  update: function update(name, field, e, value) {
    var state = {};
    value = value ? value : e.target ? e.target.value : undefined;

    // checkboxes use `checked`, not `value`
    if (field.type === "checkbox") {
      value = e.target ? e.target.checked : false;
    }

    // checkboxGroups need to build an array of checkmark positions
    else if (field.type === "checkboxGroup") {
        var curval = this.state[name];
        var pos = curval.indexOf(value);

        if (pos === -1) {
          curval.push(value);
        } else {
          curval.splice(pos, 1);
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
  setStateAsChange: function setStateAsChange(fieldname, newState) {
    var _this5 = this;

    this.setState(newState, function () {
      // only revalidate on changes if we already validated before.
      if (_this5.state.hasValidated) {
        _this5.checkValidation();
      }
      if (_this5.props.onChange) {
        _this5.props.onChange(newState);
      }
      if (_this5.props.onProgress) {
        _this5.props.onProgress(_this5.getProgress());
      }
    });
  },

  /**
   * checkValidation is called by parents to intiate a validation
   * pass that both informs the parent of errors with the form,
   * and causes the form to show its validation result.
   * @returns {boolean} true if no errors occurred, otherwise false.
   */
  checkValidation: function checkValidation() {
    var _this6 = this;

    return this.validates(function (valid) {
      if (_this6.props.validates) {
        _this6.props.validates(valid);
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
  validates: function validates(postValidate) {
    var _this7 = this;

    var state = this.state;
    var errors = [];
    var errorElements = [];
    var fields = this.props.fields || {};

    Object.keys(fields).forEach(function (name) {
      _this7.validateField(name, errors, errorElements);
    });

    this.setState({
      hasValidated: true,
      valid: errors.length === 0,
      errors: errors,
      errorElements: errorElements
    }, function () {
      postValidate(_this7.state.valid);
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
  validateField: function validateField(name, errors, errorElements) {
    var _this8 = this;

    var value = this.state[name];
    var validators = this.props.fields[name].validator;

    if (!validators) {
      return;
    }

    if (!validators.forEach) {
      validators = [validators];
    }

    validators.forEach(function (validator) {
      var err = false;

      if (validator.validate) {
        err = validator.validate(value);
      } else {
        err = !_this8.hasFieldValue(name, _this8.state[name]);
      }
      if (err && _this8.passesControl(name)) {
        errors.push(validator.error);
        if (errorElements.indexOf(name) === -1) {
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
  passesControl: function passesControl(name) {
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
  hasFieldValue: function hasFieldValue(name, value) {
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
  getErrorClass: function getErrorClass(field) {
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
  renderValidationErrors: function renderValidationErrors() {
    if (!this.state.errors || this.state.errors.length === 0) {
      return null;
    }

    // handled in render on a per-field basis?
    if (this.props.inlineErrors) {
      return null;
    }

    var label = this.props.validationLabel || "Unfortunately, there are some problems with your form fields:";

    return React.createElement(
      'div',
      { className: 'alert alert-danger' },
      React.createElement(
        'p',
        null,
        label
      ),
      React.createElement(
        'ul',
        null,
        this.state.errors.map(function (text, i) {
          return React.createElement(
            'li',
            { key: i },
            text
          );
        })
      )
    );
  }
});

module.exports = Form;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Form = __webpack_require__(2);

/**
  A multi-section form, where part of the form is only revealed
  based on values filled in for special controller fields.

  Multi-sectioned forms take an array of form JSON as this.props.field
  input, and build a multi-sectioned UI out of this. The format for
  the array of JSON is:

  [
    baseJSON,
    {
      baseJSON.value1: form fields collection object (see <Form>),
      baseJSON.value2: form fields collection object,
      value3: ...,
      ...
    }
  ]

  Currently this code is only guaranteed to work on a singly-controlled
  multi-sectioned form, but contributions that expand on this are more
  than welcome.

  Form section reveals are triggered by the Form associated with the
  baseJSON setting a value that can be matched against a property
  name in the second (third, fourth, etc) set of form field collection
  objects.

  Right now this code does not mark "some field" in the baseJSON form
  as the field to keep an eye out for: any value from the baseJSON form
  that matches the value used in the subsequent object will trigger a
  section-reveal.

**/
var MultiSectionedForm = React.createClass({
  displayName: 'MultiSectionedForm',

  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onProgress: React.PropTypes.func
  },

  // boilerplate
  getInitialState: function getInitialState() {
    // we use the "revealed" list to, at each section of the form,
    // note what the last field's value is. This is definitely
    // suboptimal, but works for now.
    //
    // TODO: assign a special flag to fields so that they can be
    //       clearly identified as the "next section" controller.
    return {
      revealed: []
    };
  },


  // boilerplate
  render: function render() {
    var _this = this;

    var fields = this.props.fields;

    // the first section of the form is always a regular controller form.
    var initialFields = fields[0];
    var initial = React.createElement(Form, {
      ref: 'initial',
      fields: initialFields,
      onChange: this.onChange(0),
      onSubmit: this.props.onSubmit,
      submitting: this.props.submitting
    });

    // the next section(s) are value-controlled, and so can consist of
    // any number of variations
    var sections = [];

    fields.forEach(function (fieldsets, id) {
      if (id === 0) {
        return;
      }

      Object.keys(fieldsets).forEach(function (controlValue) {
        var props = {
          ref: controlValue,
          key: controlValue,
          fields: fieldsets[controlValue],
          onSubmit: _this.props.onSubmit,
          onChange: _this.onChange(id),
          hidden: _this.state.revealed[id - 1] !== controlValue,
          validates: _this.props.validates,
          submitting: _this.props.submitting
        };

        sections.push(React.createElement(Form, props));
      });
    });

    return React.createElement(
      'div',
      { className: 'multi-page', hidden: this.props.hidden },
      initial,
      sections
    );
  },


  /**
   * Generate the event handler for form field updates, keeping
   * a record of which section this field is from.
   * @param {number} id the section for which onChange is triggering
   * @return {function} the onChange event handler for this section of form.
   */
  onChange: function onChange(id) {
    var _this2 = this;

    /**
     * onChange handler for form fields in a multi-section form.
     * @param {anything} update the new field value associated with the onChange event.
     * @returns {undefined}
     */
    return function (update) {
      // See if there's a form associated with the value
      // selected by this field, in the set of next forms.
      var revealed = _this2.state.revealed;
      var key = Object.keys(update)[0];
      var val = update[key];
      var ref = _this2.refs[val];

      // If so, record this value so that the associated
      // form can unhide itself in render()
      if (ref) {
        revealed[id] = val;
        _this2.setState({ revealed: revealed });
      }

      // send the onChange on to the parent component for
      // further processing.
      _this2.props.onChange(update);
    };
  },


  /**
   * checkValidation is called by parents to intiate a validation
   * pass that both informs the parent of errors with the form,
   * and causes the form to show its validation result.
   * @returns {boolean} true if no errors occurred, otherwise false.
   */
  checkValidation: function checkValidation() {
    var _this3 = this;

    var passes = this.refs.initial.checkValidation();
    var fields = this.props.fields;

    fields.forEach(function (fieldsets, id) {
      if (id === 0) {
        return;
      }

      Object.keys(fieldsets).forEach(function (controlValue) {
        if (_this3.state.revealed[id - 1] !== controlValue) {
          return;
        }

        var form = _this3.refs[controlValue];

        passes = passes && form.checkValidation();
      });
    });

    return passes;
  }
});

module.exports = MultiSectionedForm;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var validatorPropType = React.PropTypes.shape({
  error: React.PropTypes.string,
  validate: React.PropTypes.func
});

module.exports = React.PropTypes.shape({
  type: React.PropTypes.oneOfType([React.PropTypes.oneOf(['text', 'textarea', 'choiceGroup', 'checkbox', 'checkboxGroup']), React.PropTypes.func]).isRequired,
  label: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
  placeholder: React.PropTypes.string,
  validator: React.PropTypes.oneOfType([validatorPropType, React.PropTypes.arrayOf(validatorPropType)]),
  metered: React.PropTypes.boolean,
  optional: React.PropTypes.boolean,
  controller: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number, React.PropTypes.string, React.PropTypes.array, React.PropTypes.object])
  }),
  colCount: React.PropTypes.number,
  multiplicity: React.PropTypes.number
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Form = __webpack_require__(2);
var MultiSectionedForm = __webpack_require__(3);

/**
 * A moderately complex form builer for React.
 */
var MultiPageForm = React.createClass({
  displayName: 'MultiPageForm',

  propTypes: {
    formdata: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])).isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onProgress: React.PropTypes.func
  },

  /**
   * Get this component's state upon initialisation
   * @returns {object} this component's initial state
   */
  getInitialState: function getInitialState() {
    // Form data is tracked outside of state, as
    // it does not influence the UI of this component
    // in the slightest.
    this.formData = {};
    return {
      step: 0,
      steps: this.props.formdata.length,
      valid: []
    };
  },


  /**
   * Render this component
   * @returns {JSX} this component as HTML UI
   */
  render: function render() {
    var _this = this;

    var forms = this.props.formdata;
    var last = forms.length - 1;

    var formComponents = forms.map(function (fields, id) {
      var Type = fields.forEach && fields.length ? MultiSectionedForm : Form;

      var props = {
        fields: fields,
        key: id,
        ref: id === _this.state.step ? 'current' : null,
        onChange: _this.onChange,
        onSubmit: last === id ? _this.onSubmit : function () {},
        className: id === _this.state.step ? 'highlight' : '',
        hidden: id !== _this.state.step,
        validates: _this.validates,
        submitting: _this.props.submitting
      };

      return React.createElement(Type, props);
    });

    return React.createElement(
      'div',
      { className: 'multi-form' },
      formComponents,
      this.renderControls()
    );
  },


  /**
   * Render the back/next buttons for internal form navigation
   * @returns {JSX} the navigation buttons, wrapped in a div for ease of styling
   */
  renderControls: function renderControls() {
    var lastStep = this.state.step === this.state.steps - 1;
    var backLabel = 'back';
    var nextLabel = lastStep ? 'Submit' : 'Next';

    return React.createElement(
      'div',
      { className: 'navigation' },
      this.state.step > 0 ? React.createElement(
        'button',
        { className: 'back', onClick: this.stepBack },
        backLabel
      ) : null,
      React.createElement(
        'button',
        { onClick: this.stepForward },
        nextLabel
      )
    );
  },


  /**
   * Step back to the previous form
   * @returns {undefined}
   */
  stepBack: function stepBack() {
    this.step(-1);
  },


  /**
   * Step forward to the next form, or submit the
   * full form if this was the last form in the set.
   * @returns {undefined}
   */
  stepForward: function stepForward() {
    var form = this.refs.current;
    var passes = form.checkValidation();

    if (!passes) {
      return;
    }

    // just to be sure, do this check, too
    if (!this.state.valid[this.state.step]) {
      this.pendingStepValidation = this.state.step;
    }

    if (this.state.step === this.state.steps - 1) {
      this.onSubmit();
    } else {
      this.step(1);
    }
  },


  /**
   * Step us back or forward
   * @param {number} direction -1 if stepping back, +1 if stepping forward
   * @returns {undefined}
   */
  step: function step(direction) {
    var step = this.state.step + direction;

    if (step < 0) {
      step = 0;
    }

    if (step >= this.state.steps) {
      step = this.state.steps - 1;
    }

    this.setState({ step: step });
  },


  /**
   * Update our knowledge of form field content so far
   * @param {object} update a {key:value} state update object
   * @returns {undefined}
   */
  onChange: function onChange(update) {
    Object.assign(this.formData, update);
  },


  /**
   * Communicate the full form's dataset to our parent
   * @returns {undefined}
   */
  onSubmit: function onSubmit() {
    this.props.onSubmit(this.formData);
  },


  /**
   * Marks the current step as passing validation or not,
   * which is used to enable/disable the "next" button.
   * @param {boolean} bool the current step's form validity.
   * @returns {undefined}
   */
  validates: function validates(bool) {
    var valid = this.state.valid;
    var step = this.pendingStepValidation ? this.pendingStepValidation : this.state.step;

    valid[step] = bool;
    this.setState({ valid: valid });

    this.pendingStepValidation = false;
  }
});

module.exports = MultiPageForm;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(0);
var cleanProps = __webpack_require__(1);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    var props = this.props;
    var label = props.label;
    var labelClass = props.labelClass;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { className: labelClass, ref: "label" },
        React.createElement("input", _extends({}, cleanProps(props), { type: "checkbox", ref: "box" })),
        label.props.children
      )
    );
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var cleanProps = __webpack_require__(1);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    var props = this.props;
    var field = props.field;
    var choices = field.options;
    var colCount = field.colCount || 2;
    var bracket = Math.floor(choices.length / colCount);
    var columns = [];

    for (var c = 0; c < colCount; c++) {
      var choiceset = choices.slice(c * bracket, (c + 1) * bracket).map(function (choice) {
        return React.createElement(
          "div",
          { key: choice },
          React.createElement(
            "label",
            { className: props.labelClass },
            React.createElement("input", { type: "checkbox", name: props.name, value: choice, checked: props.value.indexOf(choice) > -1, onChange: props.onChange }),
            choice
          )
        );
      });

      columns.push(React.createElement(
        "div",
        { key: field.name + 'col' + c, className: "column" },
        choiceset
      ));
    }

    return React.createElement(
      "div",
      { className: "checkboxGroup", key: this.props.key },
      columns
    );
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var cleanProps = __webpack_require__(1);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    var props = this.props;
    var field = props.field;
    var choices = field.options;
    var colCount = field.colCount || 2;
    var bracket = Math.floor(choices.length / colCount);
    var columns = [];

    for (var c = 0; c < colCount; c++) {
      var choiceset = choices.slice(c * bracket, (c + 1) * bracket).map(function (choice) {
        return React.createElement(
          "div",
          { key: choice },
          React.createElement(
            "label",
            { className: props.labelClass },
            React.createElement("input", { type: "radio", name: props.name, value: choice, checked: props.value === choice, onChange: props.onChange }),
            choice
          )
        );
      });

      columns.push(React.createElement(
        "div",
        { key: field.name + 'col' + c, className: "column" },
        choiceset
      ));
    }

    return React.createElement(
      "div",
      { className: "choiceGroup", key: this.props.key },
      columns
    );
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);
var fieldType = __webpack_require__(5);

var defaultRemoveLabel = "(-)";
var defaultAddLabel = "(+)";

var MultiplicityField = React.createClass({
  displayName: 'MultiplicityField',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    field: fieldType.isRequired
  },

  getInitialState: function getInitialState() {
    var howmany = this.props.field.multiplicity;
    var values = new Array(howmany).join('|').split('|').map(function (_) {
      return '';
    });
    if (this.props.values) {
      this.props.values.forEach(function (v, i) {
        values[i] = v;
      });
    }
    return { multiplicity: howmany, values: values };
  },

  moreFields: function moreFields() {
    var multiplicity = this.state.multiplicity + 1;
    var values = this.state.values;
    values.push('');
    this.setState({ multiplicity: multiplicity, values: values });
  },

  removeField: function removeField(pos) {
    var values = this.state.values;
    if (values.length === 1) {
      return;
    }
    var multiplicity = this.state.multiplicity - 1;
    values.splice(pos, 1);
    this.setState({ multiplicity: multiplicity, values: values });
  },

  render: function render() {
    var values = this.state.values;
    return this.generateFields(this.props.name, this.props.field, values);
  },

  // geneate as many fields as are necessary for this one "thing"
  generateFields: function generateFields(name, field, values) {
    var _this = this;

    var fields = values.map(function (value, pos) {
      return _this.generateField(name, field, pos, value, function (e) {
        return _this.updateField(e, name, field, pos);
      });
    });
    return React.createElement(
      'div',
      { className: 'multiple' },
      fields,
      React.createElement(
        'button',
        { type: 'button', className: 'add-field button', onClick: this.moreFields },
        this.props.field.addLabel ? this.props.field.addLabel : defaultAddLabel
      )
    );
  },

  // handler for when one of the fields gets updated
  updateField: function updateField(e, name, field, position) {
    var _this2 = this;

    var newvalue = e.target.value;
    var values = this.state.values;
    values[position] = newvalue;
    this.setStateAsChange({ values: values }, function () {
      if (_this2.props.onUpdate) {
        _this2.props.onUpdate(e, name, field, values);
      };
    });
  },

  // slightly modified wrt the <Form> component
  setStateAsChange: function setStateAsChange(newState, andThenDoThis) {
    var _this3 = this;

    this.setState(newState, function () {
      _this3.props.checkValidation();
      if (_this3.props.onChange) {
        _this3.props.onChange(newState);
      }
      andThenDoThis();
    });
  },

  // there is a limited set of form fields that can be multiplicious
  generateField: function generateField(name, field, position, value, onChange) {
    var _this4 = this;

    var Type = field.type,
        ftype = typeof Type === 'undefined' ? 'undefined' : _typeof(Type),
        formfield = null,
        inputClass = field.fieldClassname || '';

    var common = {
      key: name + 'field' + position,
      placeholder: field.placeholder,
      value: value,
      onChange: onChange
    };

    // TODO: Should we factor in shouldFocus here?

    inputClass = (inputClass + " multiple").trim();

    if (ftype === "undefined" || Type === "text") {
      formfield = React.createElement('input', _extends({ className: inputClass, type: Type ? Type : "text" }, common));
    } else if (Type === "textarea") {
      formfield = React.createElement('textarea', _extends({ className: inputClass }, common));
    }

    var removeButton = position > 0 ? React.createElement(
      'button',
      { type: 'button', className: 'remove-field button', onClick: function onClick() {
          return _this4.removeField(position);
        } },
      this.props.field.removeLabel ? this.props.field.removeLabel : defaultRemoveLabel
    ) : null;

    return React.createElement(
      'div',
      { key: name + '-row-' + position, className: 'row' },
      formfield,
      removeButton
    );
  }

});

module.exports = MultiplicityField;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = __webpack_require__(0);
var cleanProps = __webpack_require__(1);
var MultiplicityField = __webpack_require__(10);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    var props = this.props;
    var value = props.value;

    if (props.multiplicity) {
      var values = (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" ? value : [value];
      return React.createElement(MultiplicityField, _extends({}, props, { values: values }));
    }

    return React.createElement("input", _extends({ type: "text" }, cleanProps(props)));
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var cleanProps = __webpack_require__(1);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement("textarea", cleanProps(this.props));
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  fieldType: __webpack_require__(5),
  CheckBox: __webpack_require__(7),
  CheckBoxGroup: __webpack_require__(8),
  ChoiceGroup: __webpack_require__(9),
  Text: __webpack_require__(11),
  TextArea: __webpack_require__(12)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSectionedForm = exports.MultiPageForm = exports.Form = undefined;

var _Form = __webpack_require__(2);

var _Form2 = _interopRequireDefault(_Form);

var _MultiPageForm = __webpack_require__(6);

var _MultiPageForm2 = _interopRequireDefault(_MultiPageForm);

var _MultiSectionedForm = __webpack_require__(3);

var _MultiSectionedForm2 = _interopRequireDefault(_MultiSectionedForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = exports.Form = _Form2.default;
var MultiPageForm = exports.MultiPageForm = _MultiPageForm2.default;
var MultiSectionedForm = exports.MultiSectionedForm = _MultiSectionedForm2.default;

/***/ })
/******/ ]);
});