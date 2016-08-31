import { connect } from 'react-redux';
import UserProfileForm from './user_profile_form.jsx';
import { updateUser } from '../../actions/user_actions.js';

const mapStateToProps = state => {
  return ({
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: user => dispatch(updateUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileForm);
