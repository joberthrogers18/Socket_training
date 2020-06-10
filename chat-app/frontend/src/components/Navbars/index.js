import React from "react";
import "./styles.css";

function Navbar(props) {
  const handlerLogout = () => {
    localStorage.clear();
    props.propsNav.history.push("/");
  };

  return (
    <div class="navbar">
      Chat-app
      <div onClick={() => handlerLogout()} className="logout-btn">
        Logout
      </div>
    </div>
  );
}

export default Navbar;
