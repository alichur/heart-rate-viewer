import { connect } from 'react-redux';
import { setDataView } from '../actions';
import SelectionBox from '../components/selection-box.jsx';

const mapStateToProps = (state) => ({
  value: state.dataFrequency
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (frequency) => {
    dispatch(setDataView(frequency));
  }
});

const SelectionBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionBox);

export default SelectionBoxContainer;