(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactFormBuilder"] = factory(require("react"), require("react-dom"));
	else
		root["ReactFormBuilder"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanProps = cleanProps;
function cleanProps(props) {
  var cleaned = Object.assign({}, props);
  ['field', 'multiplicity', 'labelClass', 'onUpdate', 'checkValidation', 'key'].forEach(function (p) {
    return delete cleaned[p];
  });
  return cleaned;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(24)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(23)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fields = __webpack_require__(21);

var _fields2 = _interopRequireDefault(_fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  // boilerplate
  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.reset(props);
    return _this;
  }

  _createClass(Form, [{
    key: 'reset',
    value: function reset() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.state = this.generateInitialState(props.fields);
    }
  }, {
    key: 'generateInitialState',
    value: function generateInitialState() {
      var _this2 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var initial = {};

      this.progressFields = [];
      Object.keys(fields).forEach(function (name) {
        initial[name] = null;
        if (fields[name].type === "checkboxGroup") {
          initial[name] = [];
        }
        if (fields[name].metered) {
          _this2.progressFields.push(name);
        }
      });
      initial.valid = false;
      initial.errors = [];
      initial.errorElements = [];
      initial.hasValidated = false;

      return initial;
    }

    // boilerplate

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var cn = this.props.className;
      var sm = this.props.submitting;
      var className = ("form " + (cn ? cn : '')).trim();

      return _react2.default.createElement(
        'form',
        { className: className, hidden: this.props.hidden, disabled: this.props.submitting },
        Object.keys(this.props.fields).map(function (name) {
          return _this3.buildFormField(name, _this3.props.fields[name]);
        }),
        this.renderValidationErrors()
      );
    }

    // autofocus on anything that needs autofocussing.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var afelement = this.refs.autofocus;

      if (afelement) {

        // We need to use the following code to get around
        // the bizar way in which react-select steals focus,
        // even when the browser has issued a .focus() on
        // a completely different HMTL element...
        var _forceFocus = function _forceFocus() {
          if (afelement !== document.activeElement) {
            afelement.focus();
            setTimeout(_forceFocus, 10);
          }
        };

        afelement = _reactDom2.default.findDOMNode(afelement);
        afelement.focus();
        setTimeout(_forceFocus, 100);
      }
    }

    // This is to be used for updating a progress bar...

  }, {
    key: 'getProgress',
    value: function getProgress() {
      var _this4 = this;

      // get the number of required fields that have a value filled in.
      var keys = Object.keys(this.props.fields).filter(function (key) {
        return _this4.props.fields[key].metered !== false;
      });
      var reduced = keys.reduce(function (a, b) {
        return a + (_this4.hasFieldValue(b, _this4.state[b]) ? 1 : 0);
      }, 0);
      var total = keys.length;

      return reduced / total;
    }

    // This forms the object that is passed down into specific form field components

  }, {
    key: 'formCommonObject',
    value: function formCommonObject(name, field) {
      var _this5 = this;

      field.name = name;

      var label = field.label,
          formfield = null,
          hasError = this.state.errorElements.indexOf(name) !== -1,
          labelClass = field.labelClassname ? field.labelClassname : '',
          inputClass = (hasError ? 'error' : '') + ' ' + (field.fieldClassname || '');

      var common = {
        name: name,
        field: field,
        multiplicity: field.multiplicity,
        value: this.state[name] || '',
        onChange: function onChange(e, v) {
          return _this5.update(name, field, e, v);
        },
        placeholder: field.placeholder,
        onUpdate: function onUpdate(e, n, f, v) {
          return _this5.update(n, f, e, v);
        },
        checkValidation: function checkValidation() {
          return _this5.checkValidation();
        }
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
        var optional = '';
        // mark optional fields that have a label as being optional:
        if (field.optional) {
          optional = _react2.default.createElement(
            'span',
            { key: name + 'label-optional', className: 'optional' },
            '(optional)'
          );
        }
        label = _react2.default.createElement(
          'label',
          { key: name + 'label', className: labelClass },
          label,
          optional
        );
      } else {
        label = null;
        inputClass += " nolabel";
      }

      // Make sure the input element className is set up properly
      inputClass = inputClass.trim();
      common.className = inputClass;
      common.labelClass = labelClass;

      return { common: common, label: label, labelClass: labelClass };
    }

    // See if we need to generate validation errors inline.

  }, {
    key: 'getInlineErrors',
    value: function getInlineErrors(name) {
      if (!this.props.inlineErrors) return null;

      var errors = this.state.errors;
      if (errors.length > 0) {
        // there errors; are any for this particular element?
        var elements = this.state.errorElements;
        var pos = elements.indexOf(name);
        if (pos !== -1) {
          // this particular element has a validation error!
          return _react2.default.createElement(
            'div',
            { className: 'inline error' },
            errors[pos]
          );
        }
      }

      return null;
    }

    /**
     * Create the form field JSX definition to be used by React for rendering the form UI.
     * @param {string} name the form field name, based on its key in the this.props.field object
     * @param {fieldDefinition} field the field's associated field definition from this.props.fields
     * @returns {JSX} the UI code necessary to render the form field, as fieldset
     */

  }, {
    key: 'buildFormField',
    value: function buildFormField(name, field) {
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
        formfield = _react2.default.createElement(_fields2.default.Text, common);
      } else if (Type === "textarea") {
        formfield = _react2.default.createElement(_fields2.default.TextArea, common);
      } else if (Type === "checkbox") {
        formfield = _react2.default.createElement(_fields2.default.CheckBox, _extends({}, common, { label: label, labelClass: labelClass }));
        label = null;
      } else if (Type === "choiceGroup") {
        formfield = _react2.default.createElement(_fields2.default.ChoiceGroup, common);
      } else if (Type === "checkboxGroup") {
        formfield = _react2.default.createElement(_fields2.default.CheckBoxGroup, common);
      } else if (Type === "image") {
        formfield = _react2.default.createElement(_fields2.default.Image, common);
      }
      if (ftype === "function") {
        formfield = _react2.default.createElement(Type, _extends({}, field, common));
      }

      // If there are any errors, do we need to show errors inline?
      var inlineErrors = this.getInlineErrors(name);

      return _react2.default.createElement(
        'fieldset',
        { key: name + 'set', className: name },
        label,
        formfield,
        inlineErrors
      );
    }

    /**
     * Records an update for a form element. Updates can be any kind of data,
     * as we do not know what is going to come rolling out of an onChange() event.
     * @param {fieldDefinition} field the field definition for a form field
     * @param {event} e the event associated with an onChange from an HTML element
     * @returns {undefined}
     */

  }, {
    key: 'update',
    value: function update(name, field, e, value) {
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
    }

    /**
     * Similar to this.setChange, except with a bunch of event
     * handlers tied in due to needing to communicate certain
     * state changes to the parent component.
     * @param {string} fieldname the name of the field that's getting updated
     * @param {varied} newState the new value for this field
     * @returns {undefined}
     */

  }, {
    key: 'setStateAsChange',
    value: function setStateAsChange(fieldname, newState) {
      var _this6 = this;

      this.setState(newState, function () {
        // only revalidate on changes if we already validated before.
        if (_this6.state.hasValidated) {
          _this6.checkValidation();
        }
        if (_this6.props.onChange) {
          _this6.props.onChange(newState);
        }
        if (_this6.props.onProgress) {
          _this6.props.onProgress(_this6.getProgress());
        }
      });
    }

    /**
     * checkValidation is called by parents to intiate a validation
     * pass that both informs the parent of errors with the form,
     * and causes the form to show its validation result.
     * @returns {boolean} true if no errors occurred, otherwise false.
     */

  }, {
    key: 'checkValidation',
    value: function checkValidation() {
      var _this7 = this;

      return this.validates(function (valid) {
        if (_this7.props.validates) {
          _this7.props.validates(valid);
        }
      });
    }

    /**
     * Validates all form fields, records any errors, and then
     * updates the React state to show any validation errors.
     *
     * @param {function} postValidate the function to call after running validation
     * @returns {boolean} true if no errors were found, false otherwise.
     */

  }, {
    key: 'validates',
    value: function validates(postValidate) {
      var _this8 = this;

      var state = this.state;
      var errors = [];
      var errorElements = [];
      var fields = this.props.fields || {};

      Object.keys(fields).forEach(function (name) {
        _this8.validateField(name, errors, errorElements);
      });

      this.setState({
        hasValidated: true,
        valid: errors.length === 0,
        errors: errors,
        errorElements: errorElements
      }, function () {
        postValidate(_this8.state.valid);
      });

      return !errors.length;
    }

    /**
     * Validates a field and records whether it has an error, and if
     * so, to which UI element that error would apply. This function
     * records errors in-situ, rather than by return.
     * @param {string} name name of the field to validate
     * @param {array} errors a placeholder array for recording error messages
     * @param {array} errorElements a placeholder array for recording error elements
     * @returns {undefined}
     */

  }, {
    key: 'validateField',
    value: function validateField(name, errors, errorElements) {
      var _this9 = this;

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
          err = !_this9.hasFieldValue(name, _this9.state[name]);
        }
        if (err && _this9.passesControl(name)) {
          errors.push(validator.error);
          if (errorElements.indexOf(name) === -1) {
            errorElements.push(name);
          }
        }
      });
    }

    /**
     * Check whether this field "counts" towards form completion:
     *  - uncontrolled fields always count
     *  - controlled fields only count if their controller has the appropriate value
     *
     * @param {string} name the field name to test
     * @returns {boolean} whether or not this field counts towards form completion
     */

  }, {
    key: 'passesControl',
    value: function passesControl(name) {
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
    }

    /**
     * A field has a value if it's not null, falsey, an empty array, and the
     * field is not optional. In any of these cases, this field doesn't count
     * (and so reduces by adding 0 to the running tally, rather than 1).
     *
     * @param {string} name the field name
     * @param {anything} value the field's associated value
     * @returns {boolean} whether or not this field has an associated meaningful value
     */

  }, {
    key: 'hasFieldValue',
    value: function hasFieldValue(name, value) {
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
    }

    /**
     * Get the CSS class for error reporting. This is hardcoded atm to "error".
     * @param {string} field the field name for which to determine whether there is an error.
     * @returns {string|boolean} "error" if the field has validation errors, false otherwise.
     */

  }, {
    key: 'getErrorClass',
    value: function getErrorClass(field) {
      if (!this.state.errorElements) {
        return false;
      }

      var error = this.state.errorElements.indexOf(field) > -1;

      return error ? "error" : false;
    }

    /**
     * Render any validation errors in their own little error box.
     * @returns {JSX} the error box UI
     */

  }, {
    key: 'renderValidationErrors',
    value: function renderValidationErrors() {
      if (!this.state.errors || this.state.errors.length === 0) {
        return null;
      }

      // handled in render on a per-field basis?
      if (this.props.inlineErrors) {
        return null;
      }

      var label = this.props.validationLabel || "Unfortunately, there are some problems with your form fields:";

      return _react2.default.createElement(
        'div',
        { className: 'alert alert-danger' },
        _react2.default.createElement(
          'p',
          null,
          label
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.state.errors.map(function (text, i) {
            return _react2.default.createElement(
              'li',
              { key: i },
              text
            );
          })
        )
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.propTypes = {
  fields: _propTypes2.default.objectOf(_fields.fieldType).isRequired,
  onProgress: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};

module.exports = Form;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var MultiSectionedForm = function (_React$Component) {
  _inherits(MultiSectionedForm, _React$Component);

  // boilerplate
  function MultiSectionedForm(props) {
    _classCallCheck(this, MultiSectionedForm);

    // we use the "revealed" list to, at each section of the form,
    // note what the last field's value is. This is definitely
    // suboptimal, but works for now.
    //
    // TODO: assign a special flag to fields so that they can be
    //       clearly identified as the "next section" controller.
    var _this = _possibleConstructorReturn(this, (MultiSectionedForm.__proto__ || Object.getPrototypeOf(MultiSectionedForm)).call(this, props));

    _this.state = {
      revealed: []
    };
    return _this;
  }

  // boilerplate


  _createClass(MultiSectionedForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;

      // the first section of the form is always a regular controller form.
      var initialFields = fields[0];
      var initial = _react2.default.createElement(_Form2.default, {
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
            onSubmit: _this2.props.onSubmit,
            onChange: _this2.onChange(id),
            hidden: _this2.state.revealed[id - 1] !== controlValue,
            validates: _this2.props.validates,
            submitting: _this2.props.submitting
          };

          sections.push(_react2.default.createElement(_Form2.default, props));
        });
      });

      return _react2.default.createElement(
        'div',
        { className: 'multi-page', hidden: this.props.hidden },
        initial,
        sections
      );
    }

    /**
     * Generate the event handler for form field updates, keeping
     * a record of which section this field is from.
     * @param {number} id the section for which onChange is triggering
     * @return {function} the onChange event handler for this section of form.
     */

  }, {
    key: 'onChange',
    value: function onChange(id) {
      var _this3 = this;

      /**
       * onChange handler for form fields in a multi-section form.
       * @param {anything} update the new field value associated with the onChange event.
       * @returns {undefined}
       */
      return function (update) {
        // See if there's a form associated with the value
        // selected by this field, in the set of next forms.
        var revealed = _this3.state.revealed;
        var key = Object.keys(update)[0];
        var val = update[key];
        var ref = _this3.refs[val];

        // If so, record this value so that the associated
        // form can unhide itself in render()
        if (ref) {
          revealed[id] = val;
          _this3.setState({ revealed: revealed });
        }

        // send the onChange on to the parent component for
        // further processing.
        _this3.props.onChange(update);
      };
    }

    /**
     * checkValidation is called by parents to intiate a validation
     * pass that both informs the parent of errors with the form,
     * and causes the form to show its validation result.
     * @returns {boolean} true if no errors occurred, otherwise false.
     */

  }, {
    key: 'checkValidation',
    value: function checkValidation() {
      var _this4 = this;

      var passes = this.refs.initial.checkValidation();
      var fields = this.props.fields;

      fields.forEach(function (fieldsets, id) {
        if (id === 0) {
          return;
        }

        Object.keys(fieldsets).forEach(function (controlValue) {
          if (_this4.state.revealed[id - 1] !== controlValue) {
            return;
          }

          var form = _this4.refs[controlValue];

          passes = passes && form.checkValidation();
        });
      });

      return passes;
    }
  }]);

  return MultiSectionedForm;
}(_react2.default.Component);

;

MultiSectionedForm.propTypes = {
  fields: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func
};

exports.default = MultiSectionedForm;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fieldType = __webpack_require__(10);

var _fieldType2 = _interopRequireDefault(_fieldType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultRemoveLabel = "(-)";
var defaultAddLabel = "(+)";

var MultiplicityField = function (_React$Component) {
  _inherits(MultiplicityField, _React$Component);

  function MultiplicityField(props) {
    _classCallCheck(this, MultiplicityField);

    var _this = _possibleConstructorReturn(this, (MultiplicityField.__proto__ || Object.getPrototypeOf(MultiplicityField)).call(this, props));

    var howmany = _this.props.field.multiplicity;
    var values = new Array(howmany).join('|').split('|').map(function (_) {
      return '';
    });
    if (_this.props.values) {
      _this.props.values.forEach(function (v, i) {
        values[i] = v;
      });
    }

    _this.state = { multiplicity: howmany, values: values };
    return _this;
  }

  _createClass(MultiplicityField, [{
    key: 'moreFields',
    value: function moreFields() {
      var multiplicity = this.state.multiplicity + 1;
      var values = this.state.values;
      values.push('');
      this.setState({ multiplicity: multiplicity, values: values });
    }
  }, {
    key: 'removeField',
    value: function removeField(pos) {
      var values = this.state.values;
      if (values.length === 1) {
        return;
      }
      var multiplicity = this.state.multiplicity - 1;
      values.splice(pos, 1);
      this.setState({ multiplicity: multiplicity, values: values });
    }
  }, {
    key: 'render',
    value: function render() {
      var values = this.state.values;
      return this.generateFields(this.props.name, this.props.field, values);
    }

    // geneate as many fields as are necessary for this one "thing"

  }, {
    key: 'generateFields',
    value: function generateFields(name, field, values) {
      var _this2 = this;

      var fields = values.map(function (value, pos) {
        return _this2.generateField(name, field, pos, value, function (e) {
          return _this2.updateField(e, name, field, pos);
        });
      });
      return _react2.default.createElement(
        'div',
        { className: 'multiple' },
        fields,
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'add-field button', onClick: function onClick() {
              return _this2.moreFields();
            } },
          this.props.field.addLabel ? this.props.field.addLabel : defaultAddLabel
        )
      );
    }

    // handler for when one of the fields gets updated

  }, {
    key: 'updateField',
    value: function updateField(e, name, field, position) {
      var _this3 = this;

      var newvalue = e.target.value;
      var values = this.state.values;
      values[position] = newvalue;
      this.setStateAsChange({ values: values }, function () {
        if (_this3.props.onUpdate) {
          _this3.props.onUpdate(e, name, field, values.filter(function (val) {
            return !!val.trim();
          }));
        };
      });
    }

    // slightly modified wrt the <Form> component

  }, {
    key: 'setStateAsChange',
    value: function setStateAsChange(newState, andThenDoThis) {
      var _this4 = this;

      this.setState(newState, function () {
        _this4.props.checkValidation();
        if (_this4.props.onChange) {
          _this4.props.onChange(newState);
        }
        andThenDoThis();
      });
    }

    // there is a limited set of form fields that can be multiplicious

  }, {
    key: 'generateField',
    value: function generateField(name, field, position, value, onChange) {
      var _this5 = this;

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
        formfield = _react2.default.createElement('input', _extends({ className: inputClass, type: Type ? Type : "text" }, common));
      } else if (Type === "textarea") {
        formfield = _react2.default.createElement('textarea', _extends({ className: inputClass }, common));
      }

      var removeButton = position > 0 ? _react2.default.createElement(
        'button',
        { type: 'button', className: 'remove-field button', onClick: function onClick() {
            return _this5.removeField(position);
          } },
        this.props.field.removeLabel ? this.props.field.removeLabel : defaultRemoveLabel
      ) : null;

      return _react2.default.createElement(
        'div',
        { key: name + '-row-' + position, className: 'row' },
        formfield,
        removeButton
      );
    }
  }]);

  return MultiplicityField;
}(_react2.default.Component);

;

MultiplicityField.propTypes = {
  name: _propTypes2.default.string.isRequired,
  field: _fieldType2.default.isRequired
};

exports.default = MultiplicityField;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var types = __webpack_require__(3);

var validatorPropType = types.shape({
  error: types.string,
  validate: types.func
});

var controllerPropType = {
  name: types.string,
  value: types.oneOfType([types.bool, types.number, types.string, types.array, types.object])
};

module.exports = types.shape({
  type: types.oneOfType([types.oneOf(['image', 'text', 'textarea', 'choiceGroup', 'checkbox', 'checkboxGroup']), types.func]).isRequired,
  label: types.oneOfType([types.string, types.element]),
  placeholder: types.string,
  validator: types.oneOfType([validatorPropType, types.arrayOf(validatorPropType)]),
  metered: types.boolean,
  optional: types.boolean,
  controller: types.shape(controllerPropType),
  colCount: types.number,
  multiplicity: types.number, // used by text
  prompt: types.string, // used by image
  reprompt: types.string // used by image
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(5);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _MultiSectionedForm = __webpack_require__(8);

var _MultiSectionedForm2 = _interopRequireDefault(_MultiSectionedForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A moderately complex form builer for React.
 */
var MultiPageForm = function (_React$Component) {
  _inherits(MultiPageForm, _React$Component);

  function MultiPageForm(props) {
    _classCallCheck(this, MultiPageForm);

    var _this = _possibleConstructorReturn(this, (MultiPageForm.__proto__ || Object.getPrototypeOf(MultiPageForm)).call(this, props));

    _this.reset();
    return _this;
  }

  _createClass(MultiPageForm, [{
    key: 'reset',
    value: function reset() {
      // Form data is tracked outside of state, as
      // it does not influence the UI of this component
      // in the slightest.
      this.formData = {};
      this.state = this.generateInitialState();
    }
  }, {
    key: 'generateInitialState',
    value: function generateInitialState() {
      return {
        step: 0,
        steps: this.props.formdata.length,
        valid: []
      };
    }

    /**
     * Render this component
     * @returns {JSX} this component as HTML UI
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var forms = this.props.formdata;
      var last = forms.length - 1;

      var formComponents = forms.map(function (fields, id) {
        var Type = fields.forEach && fields.length ? _MultiSectionedForm2.default : _Form2.default;

        var props = {
          fields: fields,
          key: id,
          ref: id === _this2.state.step ? 'current' : null,
          onChange: _this2.onChange,
          onSubmit: last === id ? _this2.onSubmit : function () {},
          className: id === _this2.state.step ? 'highlight' : '',
          hidden: id !== _this2.state.step,
          validates: _this2.validates,
          submitting: _this2.props.submitting
        };

        return _react2.default.createElement(Type, props);
      });

      return _react2.default.createElement(
        'div',
        { className: 'multi-form' },
        formComponents,
        this.renderControls()
      );
    }

    /**
     * Render the back/next buttons for internal form navigation
     * @returns {JSX} the navigation buttons, wrapped in a div for ease of styling
     */

  }, {
    key: 'renderControls',
    value: function renderControls() {
      var lastStep = this.state.step === this.state.steps - 1;
      var backLabel = 'back';
      var nextLabel = lastStep ? 'Submit' : 'Next';

      return _react2.default.createElement(
        'div',
        { className: 'navigation' },
        this.state.step > 0 ? _react2.default.createElement(
          'button',
          { className: 'back', onClick: this.stepBack },
          backLabel
        ) : null,
        _react2.default.createElement(
          'button',
          { onClick: this.stepForward },
          nextLabel
        )
      );
    }

    /**
     * Step back to the previous form
     * @returns {undefined}
     */

  }, {
    key: 'stepBack',
    value: function stepBack() {
      this.step(-1);
    }

    /**
     * Step forward to the next form, or submit the
     * full form if this was the last form in the set.
     * @returns {undefined}
     */

  }, {
    key: 'stepForward',
    value: function stepForward() {
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
    }

    /**
     * Step us back or forward
     * @param {number} direction -1 if stepping back, +1 if stepping forward
     * @returns {undefined}
     */

  }, {
    key: 'step',
    value: function step(direction) {
      var step = this.state.step + direction;

      if (step < 0) {
        step = 0;
      }

      if (step >= this.state.steps) {
        step = this.state.steps - 1;
      }

      this.setState({ step: step });
    }

    /**
     * Update our knowledge of form field content so far
     * @param {object} update a {key:value} state update object
     * @returns {undefined}
     */

  }, {
    key: 'onChange',
    value: function onChange(update) {
      Object.assign(this.formData, update);
    }

    /**
     * Communicate the full form's dataset to our parent
     * @returns {undefined}
     */

  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      this.props.onSubmit(this.formData);
    }

    /**
     * Marks the current step as passing validation or not,
     * which is used to enable/disable the "next" button.
     * @param {boolean} bool the current step's form validity.
     * @returns {undefined}
     */

  }, {
    key: 'validates',
    value: function validates(bool) {
      var valid = this.state.valid;
      var step = this.pendingStepValidation ? this.pendingStepValidation : this.state.step;

      valid[step] = bool;
      this.setState({ valid: valid });

      this.pendingStepValidation = false;
    }
  }]);

  return MultiPageForm;
}(_react2.default.Component);

MultiPageForm.propTypes = {
  formdata: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])).isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func
};

exports.default = MultiPageForm;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSectionedForm = exports.MultiPageForm = exports.Form = undefined;

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _MultiPageForm = __webpack_require__(13);

var _MultiPageForm2 = _interopRequireDefault(_MultiPageForm);

var _MultiSectionedForm = __webpack_require__(8);

var _MultiSectionedForm2 = _interopRequireDefault(_MultiSectionedForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = exports.Form = _Form2.default;
var MultiPageForm = exports.MultiPageForm = _MultiPageForm2.default;
var MultiSectionedForm = exports.MultiSectionedForm = _MultiSectionedForm2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanProps = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));
  }

  _createClass(CheckBox, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var label = props.label;
      var labelClass = props.labelClass;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: labelClass, ref: 'label' },
          _react2.default.createElement('input', _extends({}, (0, _cleanProps.cleanProps)(props), { type: 'checkbox', ref: 'box' })),
          label.props.children
        )
      );
    }
  }]);

  return CheckBox;
}(_react2.default.Component);

exports.default = CheckBox;
;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _cleanProps = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxGroup = function (_Component) {
  _inherits(CheckBoxGroup, _Component);

  function CheckBoxGroup(props) {
    _classCallCheck(this, CheckBoxGroup);

    return _possibleConstructorReturn(this, (CheckBoxGroup.__proto__ || Object.getPrototypeOf(CheckBoxGroup)).call(this, props));
  }

  _createClass(CheckBoxGroup, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var field = props.field;
      var choices = field.options;
      var colCount = field.colCount || 2;
      var bracket = Math.floor(choices.length / colCount);
      var columns = [];

      for (var c = 0; c < colCount; c++) {
        var choiceset = choices.slice(c * bracket, (c + 1) * bracket).map(function (choice) {
          return React.createElement(
            'div',
            { key: choice },
            React.createElement(
              'label',
              { className: props.labelClass },
              React.createElement('input', { type: 'checkbox', name: props.name, value: choice, checked: props.value.indexOf(choice) > -1, onChange: props.onChange }),
              choice
            )
          );
        });

        columns.push(React.createElement(
          'div',
          { key: field.name + 'col' + c, className: 'column' },
          choiceset
        ));
      }

      var className = props.className || "checkboxGroup";

      return React.createElement(
        'div',
        { className: className, key: this.props.key },
        columns
      );
    }
  }]);

  return CheckBoxGroup;
}(_react.Component);

exports.default = CheckBoxGroup;
;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanProps = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChoiceGroup = function (_React$Component) {
  _inherits(ChoiceGroup, _React$Component);

  function ChoiceGroup(props) {
    _classCallCheck(this, ChoiceGroup);

    return _possibleConstructorReturn(this, (ChoiceGroup.__proto__ || Object.getPrototypeOf(ChoiceGroup)).call(this, props));
  }

  _createClass(ChoiceGroup, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var field = props.field;
      var choices = field.options;
      var colCount = field.colCount || 2;
      var bracket = Math.floor(choices.length / colCount);
      var columns = [];

      for (var c = 0; c < colCount; c++) {
        var choiceset = choices.slice(c * bracket, (c + 1) * bracket).map(function (choice) {
          return _react2.default.createElement(
            'div',
            { key: choice },
            _react2.default.createElement(
              'label',
              { className: props.labelClass },
              _react2.default.createElement('input', { type: 'radio', name: props.name, value: choice, checked: props.value === choice, onChange: props.onChange }),
              choice
            )
          );
        });

        columns.push(_react2.default.createElement(
          'div',
          { key: field.name + 'col' + c, className: 'column' },
          choiceset
        ));
      }

      var className = props.className || "choiceGroup";

      return _react2.default.createElement(
        'div',
        { className: className, key: this.props.key },
        columns
      );
    }
  }]);

  return ChoiceGroup;
}(_react2.default.Component);

exports.default = ChoiceGroup;
;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanProps = __webpack_require__(1);

var _MultiplicityField = __webpack_require__(9);

var _MultiplicityField2 = _interopRequireDefault(_MultiplicityField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this.state = {
      attachment: false
    };
    return _this;
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var field = props.field;
      var className = ((props.className || '') + ' image').trim();

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', { type: 'file', hidden: "hidden", ref: 'filePicker', onChange: function onChange(e) {
            return _this2.handleFiles(e);
          } }),
        this.generatePicker(field.prompt, field.reprompt, field.helpText)
      );
    }
  }, {
    key: 'generatePicker',
    value: function generatePicker(prompt, reprompt, helpText) {
      var _this3 = this;

      if (!this.state.attachment) {
        prompt = prompt || "Click here to pick an image";
        helpText = helpText ? _react2.default.createElement(
          'span',
          { key: 'text', className: 'help-text' },
          helpText
        ) : null;

        return [_react2.default.createElement('input', { key: 'button', type: 'button', className: 'btn attach', onClick: function onClick(e) {
            return _this3.selectFiles(e);
          }, value: prompt }), helpText];
      }

      reprompt = reprompt || "Click here to pick a different image";

      return [_react2.default.createElement('img', { key: 'preview', src: "data:image/jpg;base64," + this.state.attachment.base64 }), _react2.default.createElement('input', { key: 'attach', type: 'button', className: 'btn reattach', onClick: function onClick(e) {
          return _this3.selectFiles(e);
        }, value: reprompt })];
    }
  }, {
    key: 'selectFiles',
    value: function selectFiles() {
      this.refs.filePicker.click();
    }
  }, {
    key: 'handleFiles',
    value: function handleFiles(evt) {
      var _this4 = this;

      var files = evt.target.files;
      var b64str = 'base64,';

      var parse = function parse(file) {
        var reader = new FileReader();
        var fileAsBase64 = function fileAsBase64(selectedFile) {
          return function (evt) {
            var name = escape(selectedFile.name);
            var data = evt.target.result;
            if (data) {
              var base64 = data.substring(data.indexOf(b64str) + b64str.length);
              var attachment = { name: name, base64: base64 };
              _this4.setState({ attachment: attachment }, _this4.handleImageAttached);
            }
          };
        };

        reader.onload = fileAsBase64(file);
        reader.readAsDataURL(file);
      };

      parse(Array.from(files).slice(-1)[0]);
    }
  }, {
    key: 'handleImageAttached',
    value: function handleImageAttached() {
      this.props.onChange({
        target: {
          value: this.state.attachment
        }
      });
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;
;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanProps = __webpack_require__(1);

var _MultiplicityField = __webpack_require__(9);

var _MultiplicityField2 = _interopRequireDefault(_MultiplicityField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text(props) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var value = props.value;

      if (props.multiplicity) {
        var values = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? value : [value];
        return _react2.default.createElement(_MultiplicityField2.default, _extends({}, props, { values: values }));
      }

      return _react2.default.createElement('input', _extends({ type: 'text' }, (0, _cleanProps.cleanProps)(props)));
    }
  }]);

  return Text;
}(_react2.default.Component);

exports.default = Text;
;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanProps = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));
  }

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('textarea', (0, _cleanProps.cleanProps)(this.props));
    }
  }]);

  return TextArea;
}(_react2.default.Component);

exports.default = TextArea;
;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CheckBox = __webpack_require__(15);

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxGroup = __webpack_require__(16);

var _CheckBoxGroup2 = _interopRequireDefault(_CheckBoxGroup);

var _ChoiceGroup = __webpack_require__(17);

var _ChoiceGroup2 = _interopRequireDefault(_ChoiceGroup);

var _Image = __webpack_require__(18);

var _Image2 = _interopRequireDefault(_Image);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = __webpack_require__(20);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  fieldType: __webpack_require__(10),
  CheckBox: _CheckBox2.default,
  CheckBoxGroup: _CheckBoxGroup2.default,
  ChoiceGroup: _ChoiceGroup2.default,
  Image: _Image2.default,
  Text: _Text2.default,
  TextArea: _TextArea2.default
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(11);
  var ReactPropTypesSecret = __webpack_require__(7);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(7);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(11);

var ReactPropTypesSecret = __webpack_require__(7);
var checkPropTypes = __webpack_require__(22);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);
});