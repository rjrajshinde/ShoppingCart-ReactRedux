import React from "react";
import { useAlert } from "react-alert";

function Alert() {
  const alert = useAlert();
  return (
    <div>
      <button
        onClick={() => {
          alert.success("Oh look, an alert!");
        }}
      >
        Show Alert
      </button>
    </div>
  );
}

export default Alert;
