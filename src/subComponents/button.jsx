import React from "react";
export default function Button(props) {
  return (
    <button className="button" disabled>
      {props.buttonName}
      {props.buttonIcon}
    </button>
  );
}
