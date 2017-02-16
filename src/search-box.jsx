const React = require('react');

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  render() {
    return (
      <form>
        <label>
          Choose your level of detail
        </label>
        <select value={this.state.value}>
          <option value='seconds'>Seconds</option>
          <option value='minutes'>Minutes</option>
        </select>
      </form>
    );
  }
}
module.exports = SearchBox;
