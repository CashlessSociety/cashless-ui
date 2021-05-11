import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { gql, useQuery } from '@apollo/client';

const STORE_KEY = '@CashlessUser@1';

const context = {
  id: null,
  isAuthenticated: false,
  secret: {},
  token: null,
  profile: {
    name: null,
    email: null,
    description: null,
    image: null
  },
};

const defaultContext = [context, () => {}];

const UserContext = createContext(defaultContext);

function reducer(state, action) {
  switch (action.type) {
    case 'set_secret': {
      const newState = {
        ...state,
        id: action.value.id,
        secret: action.value,
        isAuthenticated: true,
      };
      return { ...state, ...newState };
    }
    case 'set_profile': {
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.value,
        },
      };
    }
    case 'set_token': {
      return { ...state, token: action.value };
    }
    case 'logout': {
      window.localStorage.clear()
      return context;
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
      image {
        uri
      }
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
  const { fetchMore } = useQuery(PROFILE);
  useEffect(() => {
    if (
      contextValue &&
      contextValue.token &&
      contextValue.secret &&
      !contextValue.profile
    ) {
      const { id, profile } = contextValue;
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
                ...profile,
                ...data.profile,
              },
            });
          }
        },
      });
    } else {
      setState(contextValue);
    }
  }, [contextValue, fetchMore, setState]);
  return (
    <UserContext.Provider
      value={{ user: contextValue, dispatch: memoDispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
