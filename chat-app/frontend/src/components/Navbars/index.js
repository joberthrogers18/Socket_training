import React from "react";
import "./styles.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { RiChatSmile3Line } from "react-icons/ri";

function Navbar(props) {
  const handlerLogout = async () => {
    if (props.io) {
      props.io.disconnect(true);
    }
    await api.get(`/users/disconnect?id=${localStorage.getItem("tokenId")}`);
    localStorage.clear();
    props.propsNav.history.push("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-nav">
          <RiChatSmile3Line size="1.2em" />
          <span>Chat-app</span>
        </div>
      </Link>
      <div onClick={() => handlerLogout()} className="logout-btn">
        Logout
      </div>
    </div>
  );
}

export default Navbar;
