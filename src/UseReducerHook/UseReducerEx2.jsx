import { useReducer } from "react";
const UseReducer2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      case "reset":
        return { count: 0 };
      default:
        throw new Error(`There is no type called : ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count is {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reet" })}>Reset</button>
    </div>
  );
};
export default UseReducer2;
