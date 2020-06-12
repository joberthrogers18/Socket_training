import React from "react";
import "./styles.css";

import { RiChatSmile3Line } from "react-icons/ri";

function Navbar(props) {
  const handlerLogout = () => {
    localStorage.clear();
    props.propsNav.history.push("/");
  };

  return (
    <div className="navbar">
      <div className="logo-nav">
        <RiChatSmile3Line size="1.2em" />
        <span>Chat-app</span>
      </div>
      <div onClick={() => handlerLogout()} className="logout-btn">
        Logout
      </div>
    </div>
  );
}

export default Navbar;
