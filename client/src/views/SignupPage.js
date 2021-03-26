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

      {/* 
        this places content below the navbar and centers it. 
        it changes the font colour from black to white, which seems to be a css styling thing when .page-header and .container are combined... 
        not sure what else it's doing... 
        pulled it from creativetim example signup page component styling to fix problem of content disappearing under navbar 
        .page-header:before - this seems to be resonsible for making the background grey */}
      <div className="page-header">
      {/* <div className='wrapper'> */}
        <div className="content">

          <SignupForm storageKeys={storageKeys} />
          {/* removing this for now as it's so huge and silly! and the content spills over the top of it confusingly */}
          {/* <FooterSocial /> */}
        </div>
      </div>
    </>
  );
}

export default SignupPage;
