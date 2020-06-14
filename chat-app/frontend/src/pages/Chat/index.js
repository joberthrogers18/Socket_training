import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";

import "./styles.css";
import Navbar from "../../components/Navbars";

function Chat(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messageContent = document.getElementById("content-wrapper");
    messageContent.scrollTop = messageContent.scrollHeight;
  }, []);

  return (
    <>
      <Navbar propsNav={props} io={props.location.io} />
      <div className="chat">
        <div className="wrapper-chat">
          <div className="content">
            <div id="content-wrapper">
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
              <div className="position-message">
                <div className="message-wrapper">
                  <div className="user-name">Joberth Rogers</div>
                  <div className="message-content">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </div>
                </div>
                <div className="decoration-message"></div>
              </div>
            </div>
          </div>
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
