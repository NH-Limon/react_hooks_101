import { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + action.payload };
    }
    if (action.type === "decrement") {
      return { count: state.count - action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      <h1>Count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Click To Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Click To Decrement
      </button>
    </>
  );
};
export default UseReducer;
