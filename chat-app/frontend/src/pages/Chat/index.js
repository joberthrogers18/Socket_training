import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";

import "./styles.css";
import Navbar from "../../components/Navbars";
import api from "../../services/api";

function Chat(props) {
  const [messagesChat, setMessagesChat] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadDependencies = () => {
      console.log(props);
      const messageContent = document.getElementById("content-wrapper");
      messageContent.scrollTop = messageContent.scrollHeight;
      props.location.io.emit("join-room", props.match.params.id);

      props.location.io.on("send-message", (msgs) => {
        setMessagesChat(msgs);
      });
    };

    loadDependencies();
  }, []);

  const handlerMessage = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const messages = [
      ...messagesChat,
      {
        message,
        username: user.firstName + " " + user.lastName,
      },
    ];

    await api.post(`/send-message/${props.match.params.id}`, {
      messages,
    });
    setMessage("");
  };

  return (
    <>
      <Navbar propsNav={props} io={props.location.io} />
      <div className="chat">
        <div className="wrapper-chat">
          <div className="content">
            <div id="content-wrapper">
              {messagesChat.map((msg, index) => (
                <div key={index} className="position-message">
                  <div className="message-wrapper">
                    <div className="user-name">{msg.username}</div>
                    <div className="message-content">{msg.message}</div>
                  </div>
                  <div className="decoration-message"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="inputs">
            <input
              type="text"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handlerMessage()}>
              <MdSend color="#FFF" size="1.2em" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
