import React from 'react';
import { cleanProps } from './clean-props';
import MultiplicityField from './MultiplicityField.jsx';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let value = props.value;

    if (props.multiplicity) {
      let values = typeof value === "object" ? value : [value];
      return <MultiplicityField {...props} values={values} />;
    }

    return <input type="text" {...cleanProps(props)}/>;
  }
};
