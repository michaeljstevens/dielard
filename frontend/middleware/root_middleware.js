import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware
);

export default RootMiddleware;
