import { TYPES } from "../actions/countActions";

export const countInitialState = { count: 0 };

export const countInit = (initialState) => {
  return {
    count: initialState.count + 100,
  };
};

export function counterReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.RESET:
      return countInitialState;
    default:
      return state;
  }
}
