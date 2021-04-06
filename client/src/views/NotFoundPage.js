import React, {useContext} from 'react';
// reactstrap components
import { Link } from 'react-router-dom';
import TopNavbar from 'components/Navbars/TopNavbar.js';
import { Container, Button } from 'reactstrap';

function NotFoundPage() {
  return (
    <>
      <TopNavbar />
      <div className="wrapper">
      <Container className="mt-4">
        <h1>404!</h1>
        <h2>Can't find what you're looking for</h2>
        <Link to="/">
          <Button>Return home</Button>
        </Link>
        </Container>
      </div>
    </>
  );
}

export default NotFoundPage;
