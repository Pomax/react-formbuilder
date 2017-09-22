import { Component } from 'react';
import { cleanProps } from './clean-props';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let label = props.label;
    let labelClass = props.labelClass;

    return (
      <div>
        <label className={labelClass} ref="label">
          <input {...cleanProps(props)} type="checkbox" ref="box" checked={!!props.value} />
          { label.props.children }
        </label>
      </div>
    );
  }
};
