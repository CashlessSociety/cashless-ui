import React, { createContext, useReducer, useEffect, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { gql, useQuery } from "@apollo/client";

const STORE_KEY = "@CashlessUser@1";

const context = {
  id: null,
  isAuthenticated: false,
  secret: {},
  token: null,
  profile: {
    name: null,
    email: null,
    description: null,
  },
};

const defaultContext = [context, () => {}];

const UserContext = createContext(defaultContext);

function reducer(state, action) {
  switch (action.type) {
    case "set_secret": {
      try {
        const newState = {
          ...state,
          id: action.value.id,
          secret: action.value,
          isAuthenticated: true,
        };
        return { ...state, ...newState };
      } catch {
        return state;
      }
    }
    case "set_profile": {
      try {
        return {
          ...state,
          profile: {
            ...state.profile,
            ...action.value,
          },
        };
      } catch {
        return state;
      }
    }
    case "set_token": {
      try {
        return { ...state, token: action.value };
      } catch {
        return state;
      }
    }

    default:
      return state;
  }
}

export const PROFILE = gql`
  query($id: ID!) {
    profile(id: $id) {
      id
      name
      description
    }
  }
`;

export const UserProvider = ({ children }) => {
  const [initialState, setState] = useLocalStorage(STORE_KEY, context);
  const [state, dispatch] = useReducer(reducer, initialState);
  let [contextValue, memoDispatch] = useMemo(() => [state, dispatch], [
    state,
    dispatch,
  ]);
  const {
    id,
    token,
    secret,
    profile: { name, description },
  } = contextValue;
  const { fetchMore } = useQuery(PROFILE, {
    variables: { id },
  });
  useEffect(() => {
    if (token && secret && (!name || !description)) {
      /* TODO: set to locastorage */
      fetchMore({
        variables: {
          id,
        },
        updateQuery: (data) => {
          if (data) {
            setState({
              ...contextValue,
              profile: {
                ...contextValue.profile,
                ...data.profile
              }
            });
          }
        }
      });
    } else {
      setState(contextValue);
    }
  }, [contextValue, description, fetchMore, id, name, secret, setState, token]);
  return (
    <UserContext.Provider
      value={{ user: contextValue, dispatch: memoDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
