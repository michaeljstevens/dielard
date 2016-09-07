import { connect } from 'react-redux';
import Gauges from './gauges.jsx';


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    staticWorkouts: state.staticWorkouts.allStaticWorkouts,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts
  });
};

export default connect(
  mapStateToProps,
  null
)(Gauges);
