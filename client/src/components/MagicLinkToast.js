import React from 'react';
// react plugin used to create DropdownMenu for selecting messages
import { Link } from 'react-router-dom';
// reactstrap components
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

function MagicLinkToast({ show }) {
  return (
    <>
      {show && (
        <div className='p-3 bg-primary my-2 rounded'>
          <Toast className='mx-auto'>
            <ToastHeader>Don't forget to save your magic link!</ToastHeader>
            <ToastBody>
              <p>Explanation on magic link!</p>
              <Button tag={Link} to='/magiclink'>
                Send magic link
              </Button>
            </ToastBody>
          </Toast>
        </div>
      )}
    </>
  );
}
export default MagicLinkToast;
