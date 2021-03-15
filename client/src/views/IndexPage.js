import React, {useState} from 'react';

// core components
import TopNavbar from 'components/Navbars/TopNavbar.js';
import HomeHeader from 'components/Headers/HomeHeader.js';
import FooterSocial from 'components/Footers/FooterSocial.js';
import Messages from 'components/Messages.js';
import MagicLinkToast from 'components/MagicLinkToast.js';
import { localStorageGet } from '../lib/localStorage';

function IndexPage({ isAuthenticated, token, storageKeys }) {
  const [gotToken, setToken] = useState(null)
  const load = async () => {
    console.log('index page load');
    /* Repeated from index.js, need smarter way to re-check localStorage */
    const getToken = localStorageGet(storageKeys.token);
    const token = getToken[storageKeys.token];
    if (token) setToken(token)
  };
  // select states and functions
  React.useEffect(() => {
    (async () => await load())();
    //document.body.classList.add("product-page");
    //document.body.classList.add("sidebar-collapse");
    //window.scrollTo(0, 0);
    //document.body.scrollTop = 0;
    return function cleanup() {
      //document.body.classList.remove("product-page");
      //document.body.classList.remove("sidebar-collapse");
    };
  }, [load]);

  return (
    <>
      <TopNavbar isAuthenticated={isAuthenticated} />
      <div className='wrapper'>
        <HomeHeader />
        <MagicLinkToast show={!token && !gotToken && isAuthenticated} />
        <Messages />

        <FooterSocial />
      </div>
    </>
  );
}
export default IndexPage;
