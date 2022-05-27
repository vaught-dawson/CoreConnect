import React, { useState } from "react";
import AdditionalInfoContainer from "../components/AdditionalInfoContainer";
import CallContainer from "../components/CallContainer";
import SelectCampaignContainer from "../components/SelectCampaignContainer";
import SideNavbar from "../components/SideNavbar";

const MakeCalls = ({ campaigns = [], charities = [] }) => {
  const [campaign, setCampaign] = useState(false);

  return (
    <div className="page">
      <SideNavbar active="make-calls" />
      <div className="panel">
        <h2
          className="text-high on-background"
          style={{ marginBottom: "16px" }}
        >
          Make Calls
        </h2>
        <div className="content">
          <div
            className="select-campaign card dp01 on-background"
            style={{
              gridColumn: "1 / span 2",
              gridRow: "1 / 2",
              padding: "8px",
            }}
          >
            <span className="text-disabled">Campaign to Call For</span>
            <SelectCampaignContainer
              campaigns={campaigns}
              setCampaign={setCampaign}
            />
          </div>
          <div
            className="user-info card dp01 on-background"
            style={{
              gridColumn: "1 / span 2",
              gridRow: "2 / span 4",
              padding: "8px",
            }}
          >
            <span className="text-disabled">Additional Info</span>
            <AdditionalInfoContainer
              campaign={campaign}
              charity={charities.filter((c) => c._id == campaign.charityId)[0]}
            />
          </div>
          <div
            className="call-container card dp01 on-background"
            style={{
              gridColumn: "3 / span 2",
              gridRow: "1 / span 5",
              padding: "8px",
              width: "auto",
            }}
          >
            <span className="text-disabled">Call</span>
            <CallContainer />
          </div>
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

export default MakeCalls;
