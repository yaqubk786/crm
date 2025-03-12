import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
// import logo from '../Images/read'

const Left = () => {
  return (
    <>
      <div className="leftBox">
      <img src='https://cdn-icons-png.flaticon.com/512/5560/5560500.png' alt='logo' loading="lazy"/>
        <ul>
          <li><span><LuLayoutDashboard/></span>Dashboard</li>
          <li><span><MdOutlinePublishedWithChanges/></span>Publisher</li>
          <li><span><MdOutlineLeaderboard/></span>Leads</li>
          <li><span><CiViewList /></span>View all status</li>
          <li><span><IoSettingsOutline /></span>Settings</li>
          <li><span><VscFeedback /></span>FeedBack</li>       
        </ul>
      </div>
    </>
  );
};

export default Left;
