import { Component } from 'react';
import { cleanProps } from './clean-props';
import addCounter from './addCounter.jsx';

class TextArea extends Component {
  constructor(props) {
    super(props);
  }
	render() {
    return <textarea {...cleanProps(this.props)}/>;
  }
};

export default addCounter(TextArea);
