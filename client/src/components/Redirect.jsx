import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ to = "/", replace = true }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  });

  return <h1>Redirecting...</h1>;
};

export default Redirect;
