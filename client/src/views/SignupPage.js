import React from 'react';
// reactstrap components
import { useHistory } from 'react-router-dom';

// core components
import TopNavbar from 'components/Navbars/TopNavbar.js';
import FooterSocial from 'components/Footers/FooterSocial.js';
import SignupForm from 'components/SignupForm';

function SignupPage({ isAuthenticated, storageKeys }) {
  let history = useHistory();
  if (isAuthenticated) history.push('/');

  return (
    <>
      <TopNavbar isAuthenticated={isAuthenticated} />
      <div className='wrapper'>
        <SignupForm storageKeys={storageKeys} />
        <FooterSocial />
      </div>
    </>
  );
}

export default SignupPage;
