import React from 'react';
import { cleanProps } from './clean-props';

export default class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  
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
            <input type="checkbox" name={props.name} value={choice} checked={props.value.indexOf(choice)>-1} onChange={props.onChange}/>
            {choice}
          </label>
        </div>;
      });

      columns.push(<div key={field.name + 'col' + c} className="column">{choiceset}</div>);
    }

    let className = props.className || "checkboxGroup";

    return <div className={className} key={this.props.key}>{columns}</div>;
  }
};
