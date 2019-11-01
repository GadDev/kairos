import React, { Fragment } from "react";
import EventListener from "react-event-listener";

const ESC_KEY_CODE = 27;

const Modal = ({ children, onDismiss }) => {
  const handleClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onDismiss && onDismiss();
  };

  const handleKeyUp = e => {
    if (e.keyCode === ESC_KEY_CODE) {
      onDismiss && onDismiss();
    }
  };
  return (
    <Fragment>
      <EventListener target="document" onKeyUp={handleKeyUp} />
      <i
        className="close-icon"
        onClick={handleClick}
        onKeyDown={handleKeyUp}
        role="button"
        tabIndex="-1"
      >
        close
      </i>
      {children}
    </Fragment>
  );
};

export default Modal;
