import { useReducer } from "react";

const initialState = { count: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Count = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

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

export default Count;
