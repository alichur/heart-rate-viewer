import React, {PropTypes} from 'react';

function SelectionBox (props) {
  let optionList = props.options.map((option) => <option key={option.key} value={option.key}>{option.value}</option>);
  return (
    <form>
      <select className='detail-selector' value={props.value} onChange={(e) => props.handleChange(e.target.value)}>
        {optionList}
      </select>
    </form>
  );
}

SelectionBox.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

module.exports = SelectionBox;
