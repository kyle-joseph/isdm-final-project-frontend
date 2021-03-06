import React, { useEffect } from "react";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Header = (props) => {
  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        props.setSidebarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
  });
  // Menu clicked
  const hamburgerClicked = () => {
    props.setSidebarActive(!props.sidebarActive);
  };
  return (
    <div
      className={`header bg-white border-b flex justify-between items-center px-5 py-4 fixed right-0 ${
        props.sidebarActive ? "left-64" : "left-0"
      } lg:left-64`}
    >
      <div className="header-title flex justify-between items-center">
        <div className="header-hamburger mr-5 lg:mr-0 cursor-pointer">
          {props.sidebarActive ? (
            <MdClose
              size={30}
              className="text-red-600 lg:hidden hover:text-red-700"
              onClick={() => hamburgerClicked()}
            />
          ) : (
            <MdMenu
              size={30}
              className="text-cyan-600 lg:hidden hover:text-cyan-700"
              onClick={() => hamburgerClicked()}
            />
          )}
        </div>
        <h1 className="text-2xl text-cyan-600 font-bold font-nunito">
          {props.headerTitle}
        </h1>
      </div>
      <div className="header-profile">
        <div className="flex items-center px-4 -mx-2">
          <MdAccountCircle size={30} className="text-cyan-600" />
          <h4 className="ml-2 font-medium text-gray-600">
            {localStorage.getItem("cesUsername")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
