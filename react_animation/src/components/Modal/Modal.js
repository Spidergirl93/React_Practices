import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cssStyle = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssStyle.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
