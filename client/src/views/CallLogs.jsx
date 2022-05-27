import React from "react";
import SideNavbar from "../components/SideNavbar";

const CallLogs = () => {
  return (
    <div className="page">
      <SideNavbar active="call-logs" />
      <div className="panel">
        <h2
          className="text-high on-background"
          style={{ marginBottom: "16px" }}
        >
          Call Logs
        </h2>
        <div className="content">
          <div
            className="call-logs card dp01 on-background"
            style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 5",
              padding: "8px",
            }}
          >
            <span className="text-disabled">Previous Call Logs</span>
          </div>
          <div
            className="call-logs card dp01 on-background"
            style={{
              gridColumn: "2 / span 4",
              gridRow: "1 / span 5",
              padding: "8px",
            }}
          >
            <span className="text-disabled">Stats</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
