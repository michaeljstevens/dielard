import { connect } from 'react-redux';
import PoundsLifted from './pounds_lifted.jsx';


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    staticWorkouts: state.staticWorkouts.allStaticWorkouts
  });
};

export default connect(
  mapStateToProps,
  null
)(PoundsLifted);
