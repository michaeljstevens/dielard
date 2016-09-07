import { connect } from 'react-redux';
import MuscleGroupsPie from './muscle_groups_pie.jsx';
import {requestStaticWorkouts} from '../../actions/static_workout_actions.js';


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    staticWorkouts: state.staticWorkouts.allStaticWorkouts
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    requestStaticWorkouts: () => dispatch(requestStaticWorkouts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MuscleGroupsPie);
