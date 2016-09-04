import { connect } from 'react-redux';
import ExerciseForm from './exercise_form.jsx';
import {createExercise} from '../../actions/exercise_actions.js';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createExercise: exercise => dispatch(createExercise(exercise))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseForm);
