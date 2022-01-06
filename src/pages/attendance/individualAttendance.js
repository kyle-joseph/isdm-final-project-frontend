import React from "react";
import Header from "../../components/header";
import IndividualAttendanceTable from "../../components/individualAttendanceTable";
import Sidebar from "../../components/sidebar";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const IndividualAttendance = (props) => {
  return (
    <div className="attendance relative min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar
        sidebarActive={props.sidebarActive}
        setSidebarActive={props.setSidebarActive}
      />
      <div
        className={`attendance-body ${
          props.sidebarActive ? "pl-64" : "pl-0"
        } lg:pl-64`}
      >
        <Header
          headerTitle={"Attendance / CES20210001"}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />
        <div className="attendance-content pt-20 px-5 font-nunito">
          <Link to={"/attendance"}>
            <MdKeyboardBackspace
              size={28}
              className="text-cyan-600 font-bold hover:text-cyan-700"
            />
          </Link>
          <IndividualAttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default IndividualAttendance;
