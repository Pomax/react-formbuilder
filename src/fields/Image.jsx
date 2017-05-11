var React = require("react");
var cleanProps = require("./clean-props");
var MultiplicityField = require('./MultiplicityField.jsx');

module.exports = React.createClass({
  getInitialState() {
    return {
      attachment: false
    }
  },

  render() {
    let props = this.props;
    let field = props.field;
    let className = ((props.className || '') + ' image').trim();

    return (
      <div className={className}>
        <input type="file" hidden={"hidden"} ref="filePicker" onChange={e => this.handleFiles(e)}/>
        { this.generatePicker(field.prompt, field.reprompt, field.hintText) }
      </div>
    );
  },

  generatePicker: function(prompt, reprompt, hintText) {
    if (!this.state.attachment) {
      let hint = hintText ? <span className="hint">{hintText}</span> : null;

      prompt = prompt || "Click here to pick an image";

      return [
        <input type="button" className="btn attach" onClick={e => this.selectFiles(e)} value={prompt} />,
        hint
      ];
    }

    reprompt = reprompt || "Click here to pick a different image";

    return [
      <img key='preview' src={"data:image/jpg;base64," + this.state.attachment.base64}/>,
      <input key='attach' type="button" className="btn reattach" onClick={e => this.selectFiles(e)} value={reprompt} />
    ];
  },

  selectFiles: function() {
    this.refs.filePicker.click();
  },

  handleFiles: function(evt) {
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
  },

  handleImageAttached: function() {
    this.props.onChange({
      target: {
        value: this.state.attachment
      }
    });
  }
});
