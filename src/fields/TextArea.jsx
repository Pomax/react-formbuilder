import React from 'react';
import { cleanProps } from './clean-props';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
    return <textarea {...cleanProps(this.props)}/>;
  }
};
