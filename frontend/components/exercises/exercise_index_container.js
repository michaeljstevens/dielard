import {connect} from 'react-redux';
import ExerciseIndex from './exercise_index.jsx';
import {requestExercises, destroyExercise} from '../../actions/exercise_actions.js';


const mapStateToProps = (state) => {
  return({
    exercises: state.exercises.allExercises
  });
};

const mapDispatchToProps = (dispatch) =>({
  requestExercises: () => dispatch(requestExercises()),
  destroyExercise: id => dispatch(destroyExercise(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExerciseIndex);
