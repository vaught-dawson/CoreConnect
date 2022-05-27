import React from "react";
import SideNavbar from "../components/SideNavbar";
import Button from "../components/Button";

const Campaigns = ({ campaigns = [], charities = [] }) => {
  console.log(campaigns);
  console.log(charities);
  return (
    <div className="page">
      <SideNavbar active="campaigns" />
      <div className="panel">
        <h2
          className="text-high on-background"
          style={{ marginBottom: "16px" }}
        >
          Campaigns
        </h2>
        <div className="content-no-grid">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="card dp01 on-background"
              style={{
                padding: "8px",
                marginBottom: "8px",
              }}
            >
              <div
                className="inner"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "fit-content",
                  width: "100%",
                }}
              >
                <img
                  src={
                    charities.filter((c) => c._id === campaign.charityId)[0]
                      .imageURL
                  }
                  alt={
                    charities.filter((c) => c._id === campaign.charityId)[0]
                      .name
                  }
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div className="info" style={{ padding: "0 10%" }}>
                  <h2
                    className="text-high"
                    style={{
                      textAlign: "center",
                      marginBottom: "24px",
                      marginTop: "-64px",
                    }}
                  >
                    {campaign.name}
                  </h2>
                  <div
                    className="summary"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <p
                      className="text-disabled"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Summary:
                    </p>
                    <p className="text-medium">{campaign.summary}</p>
                  </div>
                </div>
                <div
                  className="right"
                  style={{
                    width: "15%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    className="text-high dp01"
                    style={{
                      marginRight: "24px",
                      color: "white",
                      backgroundColor: "#BB86FC",
                    }}
                  >
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
