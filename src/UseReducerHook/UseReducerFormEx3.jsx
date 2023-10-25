// Practicing useReducer best practices

import { useReducer } from "react";

const UseReducerForm = () => {
  const initialState = {
    username: "",
    email: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      //   case "username":
      //     return { ...state, username: action.payload };
      //   case "email":
      //     return { ...state, email: action.payload };
      case "textInput":
        return { ...state, [action.payload.key]: action.payload.value };
      default:
        throw new Error(`Unknow action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Username : {state.username}</h1>
      <h2>Email : {state.email}</h2>

      {/* <input
        type="text"
        placeholder="Type your username here"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: "username", payload: event.target.value })
        }
      />

      <input
        type="text"
        placeholder="Type your email here"
        value={state.email}
        onChange={(event) =>
          dispatch({ type: "email", payload: event.target.value })
        }
      /> */}

      <input
        type="text"
        value={state.username}
        onChange={(e) =>
          dispatch({
            type: "textInput",
            payload: { key: "username", value: e.target.value },
          })
        }
      />

      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "textInput",
            payload: { key: "email", value: e.target.value },
          })
        }
      />
    </div>
  );
};
export default UseReducerForm;
