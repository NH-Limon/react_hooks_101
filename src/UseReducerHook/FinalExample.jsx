// INCOMPLETE

import { useReducer } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  age: 0,
  profession: "",
  touched: false,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "update":
      return { ...state, [payload.key]: payload.value, touched: true };
    default:
      throw new Error(`Unknow action type: ${type}`);
  }
};

const FinalExample = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const handleInput = (e) => {
    return dispatch({
      type: "update",
      payload: { key: e.target.name, value: e.target.value },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={state.firstName}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={state.lastName}
        onChange={handleInput}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={state.age}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="profession"
        name="profession"
        value={state.age}
        onChange={handleInput}
      />
    </div>
  );
};
export default FinalExample;
