import React, {PropTypes} from 'react';

class SelectionBox extends React.Component {
  constructor () {
    super();
    this.state = { granularity: 'seconds' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.setState({ granularity: e.target.value });
    this.props.handleChange(this.state.granularity);
  }
  render () {
    return (
      <form>
        <select className='detail-selector' value={this.state.granularity} onChange={this.handleChange}>
          <option key='seconds' value='seconds'>seconds</option>
          <option key='minutes' value='minutes'>minutes</option>
        </select>
      </form>
    );
  }
}

SelectionBox.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default SelectionBox;
