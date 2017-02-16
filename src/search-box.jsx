const React = require('react');

class SearchBox extends React.Component {
  render() {
    return (
      <form>
        <label>
          Choose your level of detail
        </label>
        <select>
          <option value='seconds'>Seconds</option>
          <option value='minutes'>Minutes</option>
        </select>
      </form>
    );
  }
}
module.exports = SearchBox;
