import React from "react";
import "./Dashbord.css";
function Dashbord() {
  return (
    <div>
      <div className="discount flex">
        <div className="align-middle p-10">
          <h2 className="w-[427px] h-[139px] text-white text-[40px] font-semibold font-['Fira Sans']">
            Order Food and Get Discounts Up to
          </h2>
          <h1 className="text-white text-[58px] font-semibold font-['Poppins']">
            50% off
          </h1>
        </div>
        <div className="w-max m-auto">
          <img
            src="https://i.ibb.co/cQyD2gL/Frame-4.png"
            className="w-fit"
            alt=""
          />
        </div>
      </div>

      {/* dynamic data show */}
    </div>
  );
}

export default Dashbord;
