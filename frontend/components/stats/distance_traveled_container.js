import { connect } from 'react-redux';
import DistanceTraveled from './distance_traveled.jsx';
import {requestTravelWorkouts} from '../../actions/travel_workout_actions.js';


const mapStateToProps = state => {
    return ({
    currentUser: state.session.currentUser,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestTravelWorkouts: () => dispatch(requestTravelWorkouts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DistanceTraveled);
