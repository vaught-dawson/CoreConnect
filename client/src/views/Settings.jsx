import React from "react";
import SideNavbar from "../components/SideNavbar";

const Settings = () => {
  return (
    <div className="page" style={{ display: "flex", gap: "24px" }}>
      <SideNavbar active="settings" />
      <div className="panel">
        <h2
          className="text-high on-background"
          style={{ marginBottom: "16px" }}
        >
          Settings
        </h2>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Settings;
