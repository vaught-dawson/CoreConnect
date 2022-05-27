// import axios from "axios";
import React, { useState } from "react";
import Button from "./Button";

const CallContainer = ({ campaign = {}, charity = {} }) => {
  const [number, setNumber] = useState("");
  const [call, setCall] = useState(false);

  const startCall = () => {
    // axios
    //   .get(
    //     `http://localhost:8000/api/phoneNumbers/${charity.phoneNumberIds[0]}`
    //   )
    //   .then((res) => {
    //     const client = require("twilio")(
    //       charity.twilioSID,
    //       charity.twilioAuthToken
    //     );
    //     client.calls
    //       .create({
    //         twiml:
    //           "<Response><Play>http://demo.twilio.com/docs/classic.mp3</Play></Response>",
    //         to: number,
    //         from: res.data.number,
    //       })
    //       .then((call) => {
    //         console.log("Call:", call);
    //         setCall(call);
    //       });
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="main">
        <div
          className="call-status dp01 card"
          style={{
            width: "inherit",
            height: "400px",
            padding: "8px",
            margin: "16px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {call ? (
            <>
              <p className="text-medium">
                Status: <span className="text-high">{call.status}</span>
              </p>
            </>
          ) : (
            <p className="text-disabled">Awaiting Call...</p>
          )}
        </div>
        <div
          className="call-options"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            height: "150px",
          }}
        >
          <div className="number">
            <label
              htmlFor="number"
              className="text-disabled"
              style={{ marginRight: "4px" }}
            >
              Number:
            </label>
            <input
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <Button
            className="text-high dp01"
            style={{
              color: "white",
              backgroundColor: "#BB86FC",
            }}
            onClick={startCall}
          >
            Start Call
          </Button>
        </div>
      </div>
    </>
  );
};

export default CallContainer;
