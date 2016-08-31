export const ErrorConstants = {
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CLEAR_ERRORS: "CLEAR_ERRORS"
};

export const receiveErrors = errors => ({
  type: ErrorConstants.RECEIVE_ERRORS,
  errors
});

// export const clearErrors = () => ({
//   type: ErrorConstants.CLEAR_ERRORS
// });
