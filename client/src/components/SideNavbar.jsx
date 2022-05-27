import React, { useState } from "react";
import { Link } from "react-router-dom";
import HorizontalRule from "./HorizontalRule";
import { ReactComponent as LogoIcon } from "../images/logo.svg";
import { ReactComponent as HouseIcon } from "../images/house.svg";
import { ReactComponent as DonateIcon } from "../images/donate.svg";
import { ReactComponent as PhoneDownIcon } from "../images/phone-down.svg";
import { ReactComponent as PhoneUpIcon } from "../images/phone-up.svg";
import { ReactComponent as Settings } from "../images/settings.svg";

const SideNavbar = ({ active = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const shrinkPanel = () => {
    const panel = document.querySelector(".panel");
    setOpen(true);
    panel.style.width = "calc(100% - 184px)";
    panel.style.marginLeft = "184px";
  };

  const growPanel = () => {
    setOpen(false);
    const panel = document.querySelector(".panel");
    panel.style.width = "calc(100% - 72px)";
    panel.style.marginLeft = "72px";
  };

  return (
    <nav
      className="side-navbar dp01"
      onMouseEnter={shrinkPanel}
      onMouseLeave={growPanel}
    >
      <Link to={"/"}>
        <div className="icon-container flex-between">
          <div className="icon dp02" id="home-icon">
            <LogoIcon />
          </div>
          {isOpen && (
            <h4 className="text-high on-background nav-text-active">Home</h4>
          )}
        </div>
      </Link>
      <HorizontalRule />
      <div className="other-icons">
        <Link to={"/dashboard"}>
          <div className="icon-container flex-between">
            <div className="icon dp02">
              <HouseIcon />
            </div>
            {isOpen && (
              <h4
                className={
                  active === "dashboard"
                    ? "nav-text-active on-background"
                    : "nav-text on-background"
                }
              >
                Dashboard
              </h4>
            )}
          </div>
        </Link>
        <Link to={"/campaigns"}>
          <div className="icon-container flex-between">
            <div className="icon dp02">
              <DonateIcon />
            </div>
            {isOpen && (
              <h4
                className={
                  active === "campaigns"
                    ? "nav-text-active on-background"
                    : "nav-text on-background"
                }
              >
                Campaigns
              </h4>
            )}
          </div>
        </Link>
        <Link to={"/make-calls"}>
          <div className="icon-container flex-between">
            <div className="icon dp02">
              <PhoneUpIcon />
            </div>
            {isOpen && (
              <h4
                className={
                  active === "make-calls"
                    ? "nav-text-active on-background"
                    : "nav-text on-background"
                }
              >
                Make Calls
              </h4>
            )}
          </div>
        </Link>
        <Link to={"/call-logs"}>
          <div className="icon-container flex-between">
            <div className="icon dp02">
              <PhoneDownIcon />
            </div>
            {isOpen && (
              <h4
                className={
                  active === "call-logs"
                    ? "nav-text-active on-background"
                    : "nav-text on-background"
                }
              >
                Call Logs
              </h4>
            )}
          </div>
        </Link>
        <HorizontalRule style={{ position: "absolute", bottom: "64px" }} />
        <Link to={"/settings"} style={{ position: "absolute", bottom: "0" }}>
          <div className="icon-container flex-between">
            <div className="icon dp02">
              <Settings />
            </div>
            {isOpen && (
              <h4
                className={
                  active === "settings"
                    ? "nav-text-active on-background"
                    : "nav-text on-background"
                }
              >
                Settings
              </h4>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SideNavbar;
