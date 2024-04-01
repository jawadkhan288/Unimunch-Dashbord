import React from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppFooter from "./Components/AppFooter/AppFooter";
import PageContent from "./Components/PageContent/PageContent";
import SideMenu from "./Components/SideMenu/SideMenu";
import { Space } from "antd";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className="flex gap-4 justify-between flex-auto flex-row">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>

      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
