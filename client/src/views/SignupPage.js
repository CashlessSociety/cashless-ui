import React from 'react';

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
      <div className="page-header">
        <div className="content">
          <SignupForm storageKeys={storageKeys} />
        </div>
        <FooterSocial />
      </div>
    </>
  );
}

export default SignupPage;
