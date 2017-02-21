var React = require("react");
var cleanProps = require("./clean-props");
var MultiplicityField = require('./MultiplicityField.jsx');

module.exports = React.createClass({
  getInitialState() {
    console.log(this.props);
    return {
      attachment: false
    }
  },

  render() {
    let props = this.props;
    let className = (this.props.className || '') + ' image';

    return (
      <div className={className}>
        <input type="file" hidden={"hidden"} ref="optionalFile" onChange={e => this.handleFiles(e)}/>
        { this.generatePicker() }
      </div>
    );
  },

  generatePicker: function() {
    if (!this.state.attachment) {
      return <input type="button" className="btn attach" onClick={e => this.selectFiles(e)} value="Click here to pick an image" />;
    }

    return [
      <img key='preview' src={"data:image/jpg;base64," + this.state.attachment.base64}/>,
      <input key='attach' type="button" className="btn reattach" onClick={e => this.selectFiles(e)} value="Click here to pick a different image" />
    ];
  },

  selectFiles: function() {
    this.refs.optionalFile.click();
  },

  handleFiles: function(evt) {
    var files = evt.target.files;

    var attachment = {};

    var parse = (file) => {
      var reader = new FileReader();
      var bootstrap = (f) => {
        return (e) => {
          var name = escape(f.name);
          var data = e.target.result;

          if (data) {
            data = data.substring(data.indexOf('base64,')+'base64,'.length);
            attachment = {
              name: name,
              base64: data
            };
            this.setState({ attachment }, this.handleImageAttached);
          }
        };
      };

      reader.onload = bootstrap(file);
      reader.readAsDataURL(file);
    };

    Array.from(files).forEach(parse);
  },

  handleImageAttached: function() {
    this.props.onChange({
      target: {
        value: this.state.attachment
      }
    });
  }
});
