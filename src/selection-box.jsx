const React = require('react');

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.handleChange(event.target.value);
  }
  render() {
    var optionList = [];
    this.props.options.forEach((option) => {
        optionList.push(<option key={option.key} value={option.key}>{option.value}</option>);
      });
    return (
      <form>
        <label>
          Choose your level of detail
        </label>
        <select className="detail-selector" value={this.props.value} onChange={this.handleChange}>
          {optionList}
        </select>
      </form>
    );
  }
}
module.exports = SelectionBox;
