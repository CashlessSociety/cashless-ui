import React from 'react';

// reactstrap components
import Avatar from 'components/Avatar';
import { Button, Container, UncontrolledTooltip } from 'reactstrap';
// core components

function ProfilePageHeader({ id, save }) {
  return (
    <>
      <div>
        <Container>
          <div
            className="d-flex mt-4"
          >
            <div>
              <Button
                href={`/profile/${id}`}
                id="tooltip962023211"
                className="btnBack"
              >
                Back
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip962023211">
                Return to profile
              </UncontrolledTooltip>
            </div>
            <h1>Update My Profile</h1>
            <div>
              <Button className="btnSave" color="primary" onClick={save} >
                Save changes
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
