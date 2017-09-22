import { Component } from 'react';
import { cleanProps } from './clean-props';
import MultiplicityField from './MultiplicityField.jsx';

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUpdate(nextProps, nextState) {
    let charLimit = this.props.field.charLimit;
    if (charLimit) {
      let value = nextProps.value
      let charCount = value.length;
      let overCharLimit = charCount > charLimit;
      if (overCharLimit !== this.state.overCharLimit) {
        this.setState({ overCharLimit });
      }
    }

    let wordLimit = this.props.field.wordLimit;
    if (wordLimit) {
      let value = nextProps.value
      let wordCount = value.split(/\W+/).length;
      let overWordLimit = wordCount > wordLimit;
      if (overWordLimit !== this.state.overWordLimit) {
        this.setState({ overWordLimit });
      }
    }
  }

  render() {
    let props = Object.assign({}, this.props);
    let value = props.value;

    if (props.multiplicity) {
      let values = typeof value === "object" ? value : [value];
      return <MultiplicityField {...props} values={values} />;
    }

    // TODO: clean up
    props.className += this.state.overCharLimit ? ' over-char-limit' : '';
    props.className = props.className.trim();

    return <input data-char-limit={props.field.charLimit} data-char-count={value.length} type="text" {...cleanProps(props)}/>;
  }
};
