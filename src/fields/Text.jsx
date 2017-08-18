import { Component } from 'react';
import { cleanProps } from './clean-props';
import MultiplicityField from './MultiplicityField.jsx';
import addCounter from './addCounter.jsx'


class Text extends Component {
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

export default addCounter(Text);
