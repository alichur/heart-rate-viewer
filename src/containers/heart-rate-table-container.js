import { connect } from 'react-redux';
import HeartRateTable from '../components/heart-rate-table';

const mapStateToProps = state => ({
  heartData: state.fitbitApp.heartData,
});
const HeartRateTableContainer = connect(mapStateToProps)(HeartRateTable);

export default HeartRateTableContainer;
