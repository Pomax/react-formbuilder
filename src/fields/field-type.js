var React = require('react');

var validatorPropType = React.PropTypes.shape({
  error: React.PropTypes.string,
  validate: React.PropTypes.func
});

module.exports = React.PropTypes.shape({
  type: React.PropTypes.oneOfType([
    React.PropTypes.oneOf(['image','text','textarea','choiceGroup','checkbox','checkboxGroup']),
    React.PropTypes.func
  ]).isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  placeholder: React.PropTypes.string,
  validator: React.PropTypes.oneOfType([
    validatorPropType,
    React.PropTypes.arrayOf(validatorPropType)
  ]),
  metered: React.PropTypes.boolean,
  optional: React.PropTypes.boolean,
  controller: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number,
      React.PropTypes.string,
      React.PropTypes.array,
      React.PropTypes.object
    ]),
  }),
  colCount: React.PropTypes.number,
  multiplicity: React.PropTypes.number
});
