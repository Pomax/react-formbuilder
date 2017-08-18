import { Component } from 'react';

export default function addCounter(TextInput) {

  return class Wrapper extends Component {
    constructor(props) {
      super(props)

      this.state = {
        charCount: 0,
        wordCount: 1,
        value: ''
      }

      this.textInputProps = Object.assign({}, this.props);
      ['charLimit', 'wordLimit', 'cutAtLimit', 'onChange'].forEach((item)=> delete this.textInputProps[item])
    }

    onChange(e) {
      let value = e.target.value
      let charLimit = this.props.charLimit
      let wordLimit = this.props.wordLimit

      if(charLimit) {

        if(this.props.cutAtLimit && value.length > charLimit) {
          this.setState({
            charCount: charLimit,
            value: value.substring(0, charLimit)
          })
        }
        else {
          this.setState({
            charCount: value.length,
            value: value
          })
        }

      } else if(wordLimit) {

        let words = value.split(' ')
        if(this.props.cutAtLimit && words.length > wordLimit) {
          this.setState({
            wordCount: wordLimit,
            value: words.slice(0, wordLimit).join(' ')
          })
        } else {
          this.setState({
            wordCount: words.length,
            value: value
          })
        }
      }

      this.props.onChange(e, this.state.value)
    }

    render() {
      let remaining = null

      // if we have wordlimit or character limit render with a counter
      if(this.props.charLimit || this.props.wordLimit) {
        if(this.props.charLimit) {
          remaining = this.props.charLimit - this.state.charCount
        } else if (this.props.wordLimit) {
          remaining = this.props.wordLimit - this.state.wordCount
        }
        return (
          <div>
            <TextInput {...this.textInputProps} onChange={(e) => this.onChange(e)} value={this.state.value} />
            <div style={{ color: remaining < 0 && 'red' }}>
              {remaining}
            </div>
          </div>
        )
      }

      // else render plain old TextInput
      return <TextInput {...this.textInputProps} onChange={this.props.onChange} />
    }
  }
}
