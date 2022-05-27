import React from "react";
import SideNavbar from "../components/SideNavbar";

const Dashboard = () => {
  return (
    <div className="page">
      <SideNavbar active="dashboard" />
      <div className="panel">
        <h2
          className="text-high on-background"
          style={{ marginBottom: "16px" }}
        >
          Dashboard
        </h2>
        <div className="content">
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 1",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "2 / span 1",
              gridRow: "1 / span 1",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "3 / span 1",
              gridRow: "1 / span 1",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "4 / span 1",
              gridRow: "1 / span 1",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "1 / span 2",
              gridRow: "2 / span 2",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "3 / span 2",
              gridRow: "2 / span 2",
              padding: "8px",
            }}
          ></div>
          <div
            className="card dp01 on-background"
            style={{
              gridColumn: "1 / span 4",
              gridRow: "4 / span 2",
              padding: "8px",
            }}
          ></div>
          <div
            className="call-logs card dp01 on-background"
            style={{
              gridColumn: "5 / span 1",
              gridRow: "1 / span 5",
              padding: "8px",
            }}
          >
            <span className="text-disabled">Previous Call Logs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
