import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware.js';
import RouteMiddleWare from '../middleware/route_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  RouteMiddleWare
);

export default RootMiddleware;
