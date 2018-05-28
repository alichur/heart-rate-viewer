import { connect } from 'react-redux';
import { fetchData } from '../actions';
import SelectionBox from '../components/selection-box.jsx';

const mapDispatchToProps = (dispatch) => ({
  handleChange: (frequency) => {
    dispatch(fetchData(frequency));
  }
});

const SelectionBoxContainer = connect(
  '',
  mapDispatchToProps
)(SelectionBox);

export default SelectionBoxContainer;
