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
                color="default"
                href={`/profile/${id}`}
                id="tooltip962023211"
                size="sm"
              >
                Go back
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip962023211">
                Return to profile
              </UncontrolledTooltip>
            </div>
            <h1>Update profile</h1>
            <div>
              <Button size="sm" color="primary" onClick={save} >
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
