import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const tableCols = [
  "Student Name",
  "Student Id",
  "Email Id",
  "Phone",
  "Lead Owner",
  "Call Status",
  "College/School",
  "Course",
  "Action",
];
const TableBody = () => {
  return (
    <>
      <div className="tableBodyBox">
        <div className="tableFilters">
          <div className="leftBox">
            <p>show</p>
            <select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <p>entries</p>
          </div>
          <div className="rightBox">
            <div>
              Filter{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <div>
              <span>
                <IoIosSearch />
              </span>
              <input type="search" placeholder="search..." />
            </div>
          </div>
        </div>
        <table className="dataTable">
          <tr>
            {tableCols.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>example.com</td>
            <td>123456789</td>
            <td>Mahendra</td>
            <td>
              <div className="statusBox">
                <div>Complete</div>
                <div>+ 4 more</div>
              </div>
            </td>
            <td>Colege search</td>
            <td>NA</td>
            <td><FaEye/></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>example.com</td>
            <td>123456789</td>
            <td>Mahendra</td>
            <td>
              <div className="statusBox">
                <div>Complete</div>
                <div>+ 4 more</div>
              </div>
            </td>
            <td>Colege search</td>
            <td>NA</td>
            <td><FaEye/></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>example.com</td>
            <td>123456789</td>
            <td>Mahendra</td>
            <td>
              <div className="statusBox">
                <div>Complete</div>
                <div>+ 4 more</div>
              </div>
            </td>
            <td>Colege search</td>
            <td>NA</td>
            <td><FaEye/></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>example.com</td>
            <td>123456789</td>
            <td>Mahendra</td>
            <td>
              <div className="statusBox">
                <div>Complete</div>
                <div>+ 4 more</div>
              </div>
            </td>
            <td>Colege search</td>
            <td>NA</td>
            <td><FaEye/></td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>example.com</td>
            <td>123456789</td>
            <td>Mahendra</td>
            <td>
              <div className="statusBox">
                <div>Complete</div>
                <div>+ 4 more</div>
              </div>
            </td>
            <td>Colege search</td>
            <td>NA</td>
            <td><FaEye/></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default TableBody;
