var React = require('react');
var types = React.PropTypes;

var validatorPropType = types.shape({
  error: types.string,
  validate: types.func
});

var controllerPropType = {
  name: types.string,
  value: types.oneOfType([
    types.bool,
    types.number,
    types.string,
    types.array,
    types.object
  ]),
};

module.exports = types.shape({
  type: types.oneOfType([
    types.oneOf(['image','text','textarea','choiceGroup','checkbox','checkboxGroup']),
    types.func
  ]).isRequired,
  label: types.oneOfType([
    types.string,
    types.element
  ]),
  placeholder: types.string,
  validator: types.oneOfType([
    validatorPropType,
    types.arrayOf(validatorPropType)
  ]),
  metered: types.boolean,
  optional: types.boolean,
  controller: types.shape(controllerPropType),
  colCount: types.number,
  multiplicity: types.number,  // used by text
  prompt: types.string,        // used by image
  reprompt: types.string       // used by image
});
