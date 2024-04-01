import React from "react";
import AppRoutes from "../AppRoutes/AppRoutes";
import "./PageContent.css";

function PageContent() {
  return (
    <div className="PageContent">
      <div className="main-backgorund">
        <div className="search flex  justify-items-end">
          <label className="Input  p-3  flex items-center justify-evenly ">
            <input
              type="text"
              className="grow  border-10"
              placeholder="Search"
            />
            <button className="search-btn hover:bg-blend-color-burn ">
              Search
            </button>
          </label>
        </div>

        <AppRoutes></AppRoutes>
      </div>
    </div>
  );
}

export default PageContent;
