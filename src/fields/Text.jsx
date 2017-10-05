import CountLimitComponent from './CountLimitComponent.jsx';
import { cleanProps } from './clean-props';
import MultiplicityField from './MultiplicityField.jsx';

export default class Text extends CountLimitComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let props = Object.assign({}, this.props);
    let value = props.value;

    if (props.multiplicity) {
      let values = typeof value === "object" ? value : [value];
      return <MultiplicityField {...props} values={values} />;
    }

    return super.renderInput(<input type="text" {...cleanProps(props)}/>);
  }
};
