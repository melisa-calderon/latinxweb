import React, { useState } from "react";
import "../../main.css";
import "./tab.css"

const tab = ({headerText, bodyText, bkColor}) => {
    return (
      <div className="spacer">
        <div style={{background:bkColor }}>
        <div className="rect-header" >
          
          <div className="header-text">{headerText}</div>
          </div> 
          </div>
        <div className="rect-outline">
          <div className="body-text">{bodyText}</div>
          </div>
      </div> 
    );
  };
export default tab;