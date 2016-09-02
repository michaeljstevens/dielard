export const RouteConstants = {
  CREATE_ROUTE: "CREATE_ROUTE",
  DESTROY_ROUTE: "DESTROY_ROUTE",
  RECEIVE_SINGLE_ROUTE: "RECEIVE_SINGLE_ROUTE"
};

export const createRoute = route => ({
  type: RouteConstants.CREATE_ROUTE,
  route
});

export const receiveSingleRoute = route => ({
  type: RouteConstants.RECEIVE_SINGLE_ROUTE,
  route
});

export const destroyRoute = route => ({
  type: RouteConstants.DESTROY_ROUTE,
  route
});
