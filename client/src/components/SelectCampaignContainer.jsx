import React, { useEffect } from "react";

const SelectCampaignContainer = ({
  campaigns = [],
  setCampaign = () => {},
}) => {
  useEffect(() => {
    setCampaign(campaigns[0]);
  }, [campaigns, setCampaign]);

  return (
    <>
      <div
        className="main"
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="left"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="text-medium" style={{ marginBottom: "8px" }}>
            Select Campaign:
          </p>
          <select
            onChange={(e) =>
              setCampaign(campaigns.filter((c) => c._id === e.target.value)[0])
            }
          >
            {campaigns.map((campaign) => (
              <option key={campaign._id} value={campaign._id}>
                {campaign.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectCampaignContainer;
