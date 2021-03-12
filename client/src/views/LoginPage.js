import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { localStorageSet } from '../lib/localStorage';

export const DECRYPT_MAGIC_LINK = gql`
  query($hash: String!) {
    decryptMagicLink(hash: $hash) {
      public
      private
      curve
      id
      email
    }
  }
`;
function LoginPage({ storageKeys }) {
  let { token } = useParams();
  let history = useHistory();

  const { loading, error, data } = useQuery(DECRYPT_MAGIC_LINK, {
    variables: { hash: token },
  });
  useEffect(() => {
    if (data) {
      const { curve, id, email } = data.decryptMagicLink;
      localStorageSet(storageKeys.secret, {
        public: data.decryptMagicLink.public,
        private: data.decryptMagicLink.private,
        curve,
        id,
      });
      localStorageSet(storageKeys.email, email);
      localStorageSet(storageKeys.token, token);
      history.push('/');
    }
  }, [data, history, storageKeys, token]);

  return (
    <>
      {loading && <div>Redirecting...</div>}
      {error && <h2>Invalid token</h2>}
    </>
  );
}
export default LoginPage;
