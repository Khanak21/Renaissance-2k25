import React from "react";
import Wheel from "./Wheel.js";

import "./Sponsors.css";

export default function Sponsors(props) {
  const styleSponsorsMargin = {
    width: "100vw",
    maxHeight: "100%",
  };
  const style2 = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  };
  return (
    <div style={style2} className="prevent-select sponsorsbox">
      <div className="h-screen bg-[#84A98C]" style={styleSponsorsMargin}>
        <Wheel Images={props.ImageList} />
      </div>
    </div>
  );
}
