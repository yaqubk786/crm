import React from "react";
import Table from "./Table";

const Body = () => {
  return (
    <>
      <div className="leadBox">
        <h2>All Leads</h2>

        <div className="firstBox">
          <div className="leadNavs">
            <div>All</div>
            <div>Today My Assigned</div>
            <div>My Favourites</div>
            <div>CSL</div>
            <div>CLL</div>
            <div>Unverified</div>
            <div>+ More</div>
          </div>
          <div className="navContent"></div>
        </div>
        <div className="secondBox">
          <div className="head">Total Leads</div>
          <div className="nums">123456</div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Body;
