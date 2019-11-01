import React from "react";

const Button = ({ name, clickAction }) => {
  return (
    <div className="button-component__wrapper">
      <button onClick={clickAction}>{name}</button>
    </div>
  );
};

export default Button;
