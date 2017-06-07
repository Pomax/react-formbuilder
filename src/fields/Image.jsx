import React from 'react';
import { cleanProps } from './clean-props';
import MultiplicityField from './MultiplicityField.jsx';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attachment: false
    };
  }

  render() {
    let props = this.props;
    let field = props.field;
    let className = ((props.className || '') + ' image').trim();

    return (
      <div className={className}>
        <input type="file" hidden={"hidden"} ref="filePicker" onChange={e => this.handleFiles(e)}/>
        { this.generatePicker(field.prompt, field.reprompt, field.helpText) }
      </div>
    );
  }

  generatePicker(prompt, reprompt, helpText) {
    if (!this.state.attachment) {
      prompt = prompt || "Click here to pick an image";
      helpText = helpText ? <span className="help-text">{helpText}</span> : null;

      return [
        <input type="button" className="btn attach" onClick={e => this.selectFiles(e)} value={prompt} />,
        helpText
      ];
    }

    reprompt = reprompt || "Click here to pick a different image";

    return [
      <img key='preview' src={"data:image/jpg;base64," + this.state.attachment.base64}/>,
      <input key='attach' type="button" className="btn reattach" onClick={e => this.selectFiles(e)} value={reprompt} />
    ];
  }

  selectFiles() {
    this.refs.filePicker.click();
  }

  handleFiles(evt) {
    var files = evt.target.files;
    var b64str = 'base64,';

    var parse = (file) => {
      var reader = new FileReader();
      var fileAsBase64 = (selectedFile) => {
        return (evt) => {
          var name = escape(selectedFile.name);
          var data = evt.target.result;
          if (data) {
            var base64 = data.substring(data.indexOf(b64str) + b64str.length);
            var attachment = { name, base64 };
            this.setState({ attachment }, this.handleImageAttached);
          }
        };
      };

      reader.onload = fileAsBase64(file);
      reader.readAsDataURL(file);
    };

    parse(Array.from(files).slice(-1)[0]);
  }

  handleImageAttached() {
    this.props.onChange({
      target: {
        value: this.state.attachment
      }
    });
  }
};
