import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <div className="toggle-button" onClick={props.click}>
    Sign in <hr />
  </div>
);

export default DrawerToggleButton;
