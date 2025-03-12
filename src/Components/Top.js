import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Top = () => {
  return (
    <>
      <div className="topbox">
        <div className="timeBox">9:90 AM</div>
        <div className="activeBox">Active</div>
        <div className="socialIcons">
          <div className="icons">
            <FaRegBell />
          </div>
          <div className="icons">
            <FaUser />
          </div>
          <div className="userBox">
            <div className="icons">
              <MdMessage />
            </div>
            <div>Admin</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
