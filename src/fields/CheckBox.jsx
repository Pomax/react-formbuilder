var React = require("react");
var cleanProps = require("./clean-props");

module.exports = React.createClass({
  render() {
    let props = this.props;
    let label = props.label;
    let labelClass = props.labelClass;

    return (
    	<div>
        <label className={labelClass} ref="label">
          <input {...cleanProps(props)} type="checkbox" ref="box"/>
          { label.props.children }
        </label>
      </div>
    );
  }
});
