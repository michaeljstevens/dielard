import { connect } from 'react-redux';
import UserProfileIndexItem from './user_profile_index_item.jsx';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(
  mapStateToProps,
  null
)(UserProfileIndexItem);
