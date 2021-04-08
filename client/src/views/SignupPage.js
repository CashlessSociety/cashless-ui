import React, { useContext, useEffect } from 'react';
// reactstrap components
import { useHistory } from 'react-router-dom';
import UserContext from 'providers/User'

// core components
import TopNavbar from 'components/Navbars/TopNavbar.js';
import FooterSocial from 'components/Footers/FooterSocial.js';
import SignupForm from 'components/SignupForm';

function SignupPage() {
  let history = useHistory();
  const {user: {isAuthenticated}} = useContext(UserContext);
  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, [history, isAuthenticated]);
  return (
    <>
      <TopNavbar />
      <div className='wrapper'>
        <SignupForm />
        <FooterSocial />
      </div>
    </>
  );
}

export default SignupPage;
