import React, { useState } from "react";
import { MdSend } from "react-icons/md";

import "./styles.css";
import Navbar from "../../components/Navbars";

function Chat() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="chat">
        <div className="wrapper-chat">
          <div className="content"></div>
          <div className="inputs">
            <input
              type="text"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>
              <MdSend color="#FFF" size="1.2em" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
