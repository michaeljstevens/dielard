import { connect } from 'react-redux';
import CaloriesBurned from './calories_burned.jsx';
import {requestTravelWorkouts} from '../../actions/travel_workout_actions.js';
import {requestStaticWorkouts} from '../../actions/static_workout_actions.js';


const mapStateToProps = state => {
    return ({
    currentUser: state.session.currentUser,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts,
    staticWorkouts: state.staticWorkouts.allStaticWorkouts
  });
};

export default connect(
  mapStateToProps,
  null
)(CaloriesBurned);
