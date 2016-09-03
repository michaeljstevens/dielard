export const RouteConstants = {
  CREATE_ROUTE: "CREATE_ROUTE",
  DESTROY_ROUTE: "DESTROY_ROUTE",
  REQUEST_ROUTES: "REQUEST_ROUTES",
  RECEIVE_ROUTES: "RECEIVE_ROUTES",
  REQUEST_SINGLE_ROUTE: "REQUEST_SINGLE_ROUTE",
  RECEIVE_SINGLE_ROUTE: "RECEIVE_SINGLE_ROUTE",
  REMOVE_ROUTE: "REMOVE_ROUTE"
};

export const createRoute = route => ({
  type: RouteConstants.CREATE_ROUTE,
  route
});

export const requestRoutes = () => ({
  type: RouteConstants.REQUEST_ROUTES
});

export const receiveRoutes = (routes) => ({
  type: RouteConstants.RECEIVE_ROUTES,
  routes
});

export const requestSingleRoute = id => ({
  type: RouteConstants.REQUEST_SINGLE_ROUTE,
  id
});

export const receiveSingleRoute = route => ({
  type: RouteConstants.RECEIVE_SINGLE_ROUTE,
  route
});

export const destroyRoute = id => ({
  type: RouteConstants.DESTROY_ROUTE,
  id
});

export const removeRoute = route => ({
  type: RouteConstants.REMOVE_ROUTE,
  route
});
