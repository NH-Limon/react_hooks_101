import { useReducer } from "react";

const UseReducerAdv = () => {
  const initialValue = {
    value: "",
    touched: false,
    error: null,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "update":
        return { value: payload.value, touched: true, error: payload.error };
      case "reset":
        return initialValue;
      default:
        throw new Error(`Unknown action type : ${type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
  return (
    <div>
      <input
        type="text"
        className={state.error ? "error" : ""}
        value={state.value}
        onChange={(e) =>
          dispatch({
            type: "update",
            payload: {
              value: e.target.value,
              error: state.touched ? e.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
export default UseReducerAdv;
