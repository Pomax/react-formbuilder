import { Component } from 'react';

// Naive word counting.
function countWords(text) {
  return text.split(/\s+/).filter(v => v).length;
}

/**
 * A custom component class that can enforce character and word
 * limits on the value that the user puts in.
 * This class acts as base class to the Text and TextArea fields.
 */
export default class CountLimitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.countLimits = {};
  }

  componentWillUpdate(nextProps, nextState) {
    let countLimits = {};

    // processing all character limit information
    let charLimit = this.props.field.charLimit;
    if (charLimit) {
      let value = nextProps.value
      let charCount = value.length;
      let overCharLimit = charCount > charLimit;
      if (overCharLimit !== this.state.overCharLimit) {
        this.setState({ overCharLimit });
      }
      countLimits['data-char-limit'] = charLimit;
      countLimits['data-char-count'] = charCount;
    }

    // processing all word limit information
    let wordLimit = this.props.field.wordLimit;
    if (wordLimit) {
      let value = nextProps.value
      let wordCount = countWords(value);
      let overWordLimit = wordCount > wordLimit;
      if (overWordLimit !== this.state.overWordLimit) {
        this.setState({ overWordLimit });
      }
      countLimits['data-word-limit'] = wordLimit;
      countLimits['data-word-count'] = wordCount;
    }

    // this field gets used in the renderInput
    // function to generate appropriate data.
    this.countLimits = countLimits;
  }

  renderInput(htmlElement) {
    let countLimits = this.countLimits,
        charLimit = countLimits['data-char-limit'],
        charCount = countLimits['data-char-count'],
        overCharLimit = (this.state.overCharLimit) ? 'over-char-limit' : '',
        wordLimit = countLimits['data-word-limit'],
        wordCount = countLimits['data-word-count'],
        overWordLimit = (this.state.overWordLimit) ? 'over-word-limit' : '',
        className = [overCharLimit, overWordLimit].join(' ').trim();

    // This is a span-wrap to ensure that sane CSS can be
    // written to deal with data and error presentation.
    return <span className={className}>
      {htmlElement}
      {!charLimit ? null : <span className="char-limit">{charCount}/{charLimit}</span>}
      {!wordLimit ? null : <span className="word-limit">{wordCount}/{wordLimit}</span>}
    </span>;
  }
};
