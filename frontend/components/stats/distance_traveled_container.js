import { connect } from 'react-redux';
import DistanceTraveled from './distance_traveled.jsx';
import {requestTravelWorkouts} from '../../actions/travel_workout_actions.js';


const mapStateToProps = state => {
    return ({
    currentUser: state.session.currentUser,
    travelWorkouts: state.travelWorkouts.allTravelWorkouts
  });
};


export default connect(
  mapStateToProps,
  null
)(DistanceTraveled);
