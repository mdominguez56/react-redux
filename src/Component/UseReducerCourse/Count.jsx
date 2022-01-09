import { useState, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Count = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => dispatch({ type: "INCREMENT" });
  const subtract = () => dispatch({ type: "DECREMENT" });
  return (
    <div style={{ textAlign: "center" }}>
      This is an accountant with useReducer:
      <nav>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </nav>
      <h3>Result:{state.count}</h3>
    </div>
  );
};

export default Count;
