import React from 'react';

// reactstrap components
import Avatar from 'components/Avatar';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  UncontrolledTooltip,
} from 'reactstrap';
// core components

function ProfilePageHeader({ profile }) {
  let { goBack } = useHistory();
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });
  return (
    <>
      <div
        style={{
          margin: '2.5vh',
          justifyContent: 'space-around',
          display: 'flex',
        }}
      >
        <Button size="sm" onClick={goBack}>
          <i className="fa fa-angle-left"></i>
          <span style={{paddingLeft: 7.5 }}>Back</span>
        </Button>
        <div>
          <Button
            className="mr-1"
            color="default"
            href="#pablo"
            id="tooltip871723211"
            onClick={(e) => e.preventDefault()}
            size="sm"
          >
            <span style={{paddingRight: 7.5 }}>Tweet</span>
            <i className="fab fa-twitter"></i>
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip871723211">
            Share on Twitter
          </UncontrolledTooltip>
          <Button
            className="mr-1"
            color="default"
            href="#pablo"
            id="tooltip871723210"
            onClick={(e) => e.preventDefault()}
            size="sm"
          >
            <span style={{paddingRight: 7.5 }}>Share</span>
            <i className="fab fa-instagram"></i>
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip871723210">
            Share on Instagram
          </UncontrolledTooltip>
        </div>
      </div>
      <div
        className="page-header header-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: 'url(' + require('assets/img/steve-halama-kfwQvL6niR8-unsplash.jpg') + ')',
          }}
          ref={pageHeader}
        ></div>
        <Container>
        <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar size="120" src={profile.image} />
          </div>
          {/* <p className="category">{profile.ocupation}</p> */}
          <h3 className="title">{profile.name}</h3>
          <p>{profile.description}</p>
          {/* <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
