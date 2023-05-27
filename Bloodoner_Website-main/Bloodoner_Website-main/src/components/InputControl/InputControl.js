import React from "react";

function InputControl(props) {
  return (
    <div className = "container-InPutControl">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
