import { createContext, useReducer } from "react";
const storedUser=JSON.parse(localStorage.getItem("user"));
// Initial state
const INITIAL_STATE = {
  user: storedUser ||null,
  loading: false,
  error: null,
};

// Reducer
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
      case "LOGOUT":
        return {
          user: null,
          loading: false,
          error: null,
        };
    default:
      return state;
  }

  
};

// Create context
export const AuthContext = createContext();

// Auth provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};