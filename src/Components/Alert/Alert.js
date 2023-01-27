import React from "react";
import "./Alert.css";
function Alert(props) {
  const cap = (word) => {
    if (word === "danger") {
      word = "error";
    }
    // if(word === 'success'
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      {/* {props.alert && (
        <div
          className={` alert alert-${props.alert.type} d-none `}
          role="alert"
        >
          <strong>{props.alert.type}</strong>:{props.alert.msg}
        </div> */}
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{cap(props.alert.type)} </strong> : {props.alert.msg}
        </div>
      )}
    </>
  );
}

export default Alert;
