const React = require('react');

class SearchBox extends React.Component {
  render() {
    return (
      <form>
        <input type="datetime-local" placeholder="start time..." />
        <input type="datetime-local" placeholder="end time..." />
      </form>
    );
  }
}

module.exports = SearchBox;
