import CountLimitComponent from './CountLimitComponent.jsx';
import { cleanProps } from './clean-props';

export default class TextArea extends CountLimitComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return super.renderInput(<textarea {...cleanProps(this.props)}/>);
  }
};
