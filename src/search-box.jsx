const React = require('react');

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.handleChange(event.target.value);
  }
  render() {
    return (
      <form>
        <label>
          Choose your level of detail
        </label>
        <select value={this.props.value} onChange={this.handleChange}>
          <option value='seconds'>Seconds</option>
          <option value='minutes'>Minutes</option>
        </select>
      </form>
    );
  }
}
module.exports = SearchBox;
