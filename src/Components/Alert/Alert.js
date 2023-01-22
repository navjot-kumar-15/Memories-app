import React from "react";
import "./Alert.css";
function Alert(props) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </>
  );
}

export default Alert;
