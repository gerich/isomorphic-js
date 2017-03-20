import { INCREMENT_COUNTER } from 'redux/actions/counterActions';

const initialState = { value: 0 };

export default function (state = initialState, action) {
  if (INCREMENT_COUNTER === action.type) {
    return { value: state.value + 1 };
  }

  return state;
}
