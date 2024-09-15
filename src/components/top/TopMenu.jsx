import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <>
      <div className="top-menu-container flex justify-center p-5 items-center gap-10 w-full">
        <div className="menu-action flex gap-5">
          <button to="/" className="text-xl font-black hover:text-slate-900">
            PLAY
          </button>
          <button
            to="/"
            className="text-xl text-slate-300 font-bold hover:text-slate-900"
          >
            INBOX
          </button>
        </div>
        <FontAwesomeIcon
          className="absolute text-2xl text-slate-300 top-5 right-5 "
          icon={faGear}
        />
      </div>
    </>
  );
};

export default TopMenu;
