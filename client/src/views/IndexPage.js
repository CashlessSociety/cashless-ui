import React, {useContext} from 'react';

// core components
import TopNavbar from 'components/Navbars/TopNavbar.js';
import HomeHeader from 'components/Headers/HomeHeader.js';
import FooterSocial from 'components/Footers/FooterSocial.js';
import Messages from 'components/Messages.js';
import MagicLinkToast from 'components/MagicLinkToast.js';
import UserContext from '../providers/User'


function IndexPage() {
  const {user: { isAuthenticated, token }} = useContext(UserContext);
  return (
    <>
      <TopNavbar />
      <div className='wrapper'>
        <HomeHeader />
        <MagicLinkToast show={!token && isAuthenticated} />
        <Messages />

        <FooterSocial />
      </div>
    </>
  );
}
export default IndexPage;
