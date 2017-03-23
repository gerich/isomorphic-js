import { TIME_REQUEST_STARTED, TIME_REQUEST_FINISHED, TIME_REQUEST_ERROR } from 'redux/actions/timeActions';

const initialState = {
  time: null,
  errors: null,
  loading: false
};

export default function (state = initialState, action) {
  if (TIME_REQUEST_STARTED === action.type) {
    return Object.assign({}, state, { loading: true, errors: null });
  }

  if (TIME_REQUEST_FINISHED === action.type) {
    return {
      loading: false,
      errors: null,
      time: action.time
    };
  }

  if (TIME_REQUEST_ERROR === action.type) {
    return Object.assign({}, state, { loading: false, error: action.errors });
  }

  return state;
}
