import React, { createContext, useReducer, useEffect, useMemo } from "react";
import useLocalStorage from '../hooks/useLocalStorage'
import { gql, useQuery } from "@apollo/client";

const STORE_KEY = "@CashlessUser@1";

const context = {
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

export const FEED = gql`
  query($id: String!) {
    feed(id: $id) {
      id
      name
      description
    }
  }
`;

export const UserProvider = ({ children }) => {
  const [initialState, setState] = useLocalStorage(STORE_KEY, context)
  /* TODO: query for profile */
  // const { loading, error, data } = useQuery(FEED, {
  //   variables: { id: secret.public },
  // });
  const [state, dispatch] = useReducer(reducer, initialState);
  const [contextValue, memoDispatch] = useMemo(() => [state, dispatch], [
    state,
    dispatch,
  ]);
  const { token, secret, profile: { name, description } } = contextValue
  useEffect(() => {
    if (token && secret && (!name || !description)) {
      /* TODO: set to locastorage */
    }
    setState(contextValue);
  }, [contextValue, description, name, secret, setState, token]);
  return (
    <UserContext.Provider
      value={{ user: contextValue, dispatch: memoDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
