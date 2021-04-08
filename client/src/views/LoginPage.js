import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import UserContext from 'providers/User'

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
function LoginPage() {
  let { token } = useParams();
  let history = useHistory();
  const {dispatch} = useContext(UserContext);
  const { loading, error, data } = useQuery(DECRYPT_MAGIC_LINK, {
    variables: { hash: token },
  });
  useEffect(() => {
    if (data) {
      const { curve, id, email } = data.decryptMagicLink;
      const secret = {
        public: data.decryptMagicLink.public,
        private: data.decryptMagicLink.private,
        curve,
        id,
      }
      dispatch({value: {email}, type: 'set_profile'})
      dispatch({value: secret, type: 'set_secret'})
      dispatch({value: token, type: 'set_token'})
      history.push('/');
    }
  }, [data, history, dispatch, token]);

  return (
    <>
      {loading && <div>Redirecting...</div>}
      {error && <h2>Invalid token</h2>}
    </>
  );
}
export default LoginPage;
