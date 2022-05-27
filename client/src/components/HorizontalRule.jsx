import React from "react";

const hrStyle = {
  borderTop: "1px solid rgba(255,255,255,.04)",
  width: "80%",
  margin: "8px 10%",
};

const HorizontalRule = ({ style = {} }) => {
  return <div className="horizontal-rule" style={{ ...hrStyle, ...style }} />;
};

export default HorizontalRule;
