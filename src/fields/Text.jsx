var React = require("react");
var cleanProps = require("./clean-props");
var MultiplicityField = require('./MultiplicityField.jsx');

module.exports = React.createClass({
  render() {
    let props = this.props;
    let value = props.value;

    if (props.multiplicity) {
      let values = typeof value === "object" ? value : [value];
      return <MultiplicityField {...props} values={values} />;
    }

    return <input type="text" {...cleanProps(props)}/>;
  }
});
