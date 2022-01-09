import { useReducer } from "react";
import {
  counterReducer,
  countInit,
  countInitialState,
} from "../reducers/countReducer";
import { TYPES } from "../actions/countActions";

const NewCount = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    countInitialState,
    countInit
  );

  const add = () => dispatch({ type: TYPES.INCREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const subtract = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      This is an accountant with useReducer:
      <nav>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={add5}>+5</button>
        <button onClick={reset}>Reset</button>
      </nav>
      <h3>Result:{state.count}</h3>
    </div>
  );
};

export default NewCount;
