var React = require("react");
var cleanProps = require("./clean-props");

module.exports = React.createClass({
	render() {
    return <textarea {...cleanProps(this.props)}/>;
  }
});
