import React from 'react';
import PropTypes from 'prop-types';

var validatorPropType = PropTypes.shape({
  error: PropTypes.string,
  validate: PropTypes.func
});

var controllerPropType = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
};

module.exports = PropTypes.shape({
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['image','text','textarea','choiceGroup','checkbox','checkboxGroup']),
    PropTypes.func
  ]).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  placeholder: PropTypes.string,
  validator: PropTypes.oneOfType([
    validatorPropType,
    PropTypes.arrayOf(validatorPropType)
  ]),
  metered: PropTypes.boolean,
  optional: PropTypes.boolean,
  controller: PropTypes.shape(controllerPropType),
  colCount: PropTypes.number,
  multiplicity: PropTypes.number,  // used by text
  prompt: PropTypes.string,        // used by image
  reprompt: PropTypes.string       // used by image
});
