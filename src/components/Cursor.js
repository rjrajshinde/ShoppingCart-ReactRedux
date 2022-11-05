import React, { useState, useEffect } from "react";
import "../css/Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [isOnLink, setIsOnLink] = useState(false);

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

    const linkAddEventListeners = () => {
      const linkItems = document.querySelectorAll(".linkking");
      linkItems.forEach((item) => {
        item.addEventListener("mouseenter", mLinkEnter);
        item.addEventListener("mouseleave", mLinkLeave);
      });
    };

    const linkRemoveEventListeners = () => {
      const linkItems = document.querySelectorAll(".linkking");
      linkItems.forEach((item) => {
        item.removeEventListener("mouseenter", mLinkEnter);
        item.removeEventListener("mouseleave", mLinkLeave);
      });
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

    const mLinkEnter = () => {
      setIsOnLink(true);
    };

    const mLinkLeave = () => {
      setIsOnLink(false);
    };

    addEventListeners();
    linkAddEventListeners();
    return () => {
      removeEventListeners();
      linkRemoveEventListeners();
    };
  }, []);

  console.log("isOnLink,isOnLink", isOnLink);

  return (
    <>
      <div
        className={
          "cursorRing " +
          (hidden ? "c--hidden " : " ") +
          (click ? "c--click " : " ") +
          (isOnLink ? "c--hover " : " ")
        }
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className={
          "cursorDot " +
          (hidden ? "c--hidden " : " ") +
          (click ? "c--click " : " ")
        }
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
