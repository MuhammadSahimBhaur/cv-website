import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Hello = () => {
  return (
    <div className="left-side-box">
      <div>
        <div>
          <h1>Hello!</h1>
          <h2 style={{ display: "flex", alignItems: "center" }}>
            Keep scrolling down for more. <ArrowDownwardIcon />
          </h2>
        </div>

        <h1>My name is Sahim Bhaur.</h1>
        <h1>I'm a software engineer.</h1>
      </div>
    </div>
  );
};

export default Hello;
