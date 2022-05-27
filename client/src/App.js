import axios from "axios";

import "./App.css";
import "./styles/material-dark.css";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Redirect from "./components/Redirect";
import Campaigns from "./views/Campaigns";
import MakeCalls from "./views/MakeCalls";
import CallLogs from "./views/CallLogs";
import Settings from "./views/Settings";
import { useEffect, useState } from "react";

function App() {
  const [charities, setCharities] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const [refreshCharities, setRefreshCharities] = useState([]);
  const [refreshCampaigns, setRefreshCampaigns] = useState([]);

  useEffect(() => {
    if (!refreshCharities) return;

    axios
      .get("http://localhost:8000/api/charities")
      .then((res) => {
        setCharities(res.data.charities);
      })
      .catch((err) => {
        console.log(err);
      });
    setRefreshCharities(false);
  }, [refreshCharities]);

  useEffect(() => {
    if (!refreshCampaigns) return;

    axios
      .get("http://localhost:8000/api/campaigns")
      .then((res) => {
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
    setRefreshCampaigns(false);
  }, [refreshCampaigns]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/campaigns"
            element={<Campaigns charities={charities} campaigns={campaigns} />}
          />
          <Route
            path="/make-calls"
            element={<MakeCalls charities={charities} campaigns={campaigns} />}
          />
          <Route path="/call-logs" element={<CallLogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Redirect to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
