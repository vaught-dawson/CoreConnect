import React from "react";

const AdditionalInfoContainer = ({ charity = false, campaign = false }) => {
  return (
    <>
      {campaign && charity && (
        <>
          <p className="text-disabled" style={{ marginTop: "16px" }}>
            Charity:
          </p>
          <p className="text-high">{charity.name}</p>
          <p className="text-disabled" style={{ marginTop: "16px" }}>
            Summary:
          </p>
          <p className="text-high">{campaign.summary}</p>
          <p className="text-disabled" style={{ marginTop: "16px" }}>
            Description:
          </p>
          <p className="text-high">{campaign.description}</p>
        </>
      )}
    </>
  );
};

export default AdditionalInfoContainer;
