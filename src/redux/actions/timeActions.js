export const TIME_REQUEST_STARTED  = 'TIME_REQUEST_STARTED';
export const TIME_REQUEST_FINISHED = 'TIME_REQUEST_FINISHED';
export const TIME_REQUEST_ERROR    = 'TIME_REQUEST_ERROR';

function timeRequestedStarted() {
  return { type: TIME_REQUEST_STARTED };
}

function timeRequestFinished(time) {
  return { type: TIME_REQUEST_FINISHED, time };
}

function timeRequestError(errors) {
  return { type: TIME_REQUEST_ERROR, errors };
}

export function timeRequest() {
  return (dispatch) => {
    dispatch(timeRequestedStarted());
    // TODO: здесь аякс
    return setTimeout(() => dispatch(timeRequestFinished(Date.now())), 1000);
  };
}
