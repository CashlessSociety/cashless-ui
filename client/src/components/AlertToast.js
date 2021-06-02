import React from "react";
// reactstrap components
import {
  Alert
} from "reactstrap";

function AlertToast(isOpen) {

  return (
    <Alert
      color="success"
      isOpen={isOpen.isOpen}
    >
      <div className="alert-icon">
        <i className="now-ui-icons ui-1_check"></i>
      </div>
      You have successfully logged out.
    </Alert>
  )
}

export default AlertToast;
