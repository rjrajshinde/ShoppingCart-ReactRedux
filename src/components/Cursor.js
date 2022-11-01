import React, { useState, useEffect } from "react";
import "../css/Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    console.log(hidden);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cHidden = hidden ? "c--hidden " : " ";
  const cClick = click ? "c--click " : " ";

  return (
    // <div
    //   className={
    //     "cursor " + (hidden ? "c--hidden " : " ") + (click ? "c--click " : " ")
    //   }
    //   //   className={`cursor ${cHidden} ${cClick}`}
    //   style={{
    //     left: `${position.x}px`,
    //     top: `${position.y}px`,
    //   }}
    // />
    <div
      className={
        "cursorRing " +
        (hidden ? "c--hidden " : " ") +
        (click ? "c--click " : " ")
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor" />
    </div>
  );
};

export default Cursor;
