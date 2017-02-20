var React = require("react");
var cleanProps = require("./clean-props");

module.exports = React.createClass({
  render() {
    let props = this.props;
    let field = props.field;
    let choices = field.options;
    let colCount = field.colCount || 2;
    let bracket = Math.floor(choices.length/colCount);
    let columns = [];

    for (let c=0; c<colCount; c++) {
      let choiceset = choices.slice(c*bracket, (c+1)*bracket).map(choice => {
        return <div key={choice}>
          <label className={props.labelClass}>
            <input type="radio" name={props.name} value={choice} checked={props.value === choice} onChange={props.onChange}/>
            {choice}
          </label>
        </div>;
      });

      columns.push(<div key={field.name + 'col' + c} className="column">{choiceset}</div>);
    }

    return <div className="choiceGroup" key={this.props.key}>{columns}</div>;
  }
});
