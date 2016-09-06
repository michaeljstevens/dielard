import { connect } from 'react-redux';
import StaticWorkoutForm from './static_workout_form.jsx';
import {createStaticWorkout} from '../../actions/static_workout_actions.js';
import {requestExercises} from '../../actions/exercise_actions.js';
import {createWorkoutExercise} from '../../actions/workout_exercise_actions.js';


const mapStateToProps = state => {
    return ({
    currentUser: state.session.currentUser,
    exercises: state.exercises.allExercises,
    staticWorkout: state.staticWorkouts.staticWorkout
  });
};

const mapDispatchToProps = (dispatch) => ({
  createStaticWorkout: staticWorkout => dispatch(createStaticWorkout(staticWorkout)),
  requestExercises: () => dispatch(requestExercises()),
  createWorkoutExercise: workoutExercise => dispatch(createWorkoutExercise(workoutExercise))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaticWorkoutForm);
