import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import TableBody from "./TableBody";

const Table = () => {
  return (
    <div className="tableParent">
      <div className="tableNavContainer">
        <div className="leftTableNav">
          <p>All Leads</p>
          <div>Today</div>
          <div>Done</div>
          <div>Missed</div>
        </div>
        <div className="rightTableNav">
          <div>Add New</div>
          <div>
            <span>
              <IoCloudUploadOutline />
            </span>
            Get USP
          </div>
          <div>
            <span>
              <FiDownload />
            </span>
            Download
          </div>
        </div>
      </div>
      <TableBody />
    </div>
  );
};

export default Table;
