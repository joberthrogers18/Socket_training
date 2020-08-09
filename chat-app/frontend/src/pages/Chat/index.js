import React, { useState, useEffect, useContext } from "react";
import { MdSend } from "react-icons/md";

import "./styles.css";
import Navbar from "../../components/Navbars";
import api from "../../services/api";
import { ChatContext } from "../../utils/context";

function Chat(props) {
  const { mySocket } = useContext(ChatContext);
  // const [io, setIo] = useState(null);
  const [messagesChat, setMessagesChat] = useState([]);
  const [message, setMessage] = useState("");
  const [roomName, setRoom] = useState("");

  useEffect(() => {
    const loadDependencies = async () => {
      const [myId, userChat] = props.match.params.id.split('-');
      const messageContent = document.getElementById("content-wrapper");
      messageContent.scrollTop = messageContent.scrollHeight;

      const userChatParser = parseInt(Number("0x" + userChat.slice(0, 5)));
      const myIdParser = parseInt(Number("0x" + myId.slice(0, 5)));
      const formatNameRoom = myIdParser < userChatParser ? `${myIdParser}${userChatParser}` : `${userChatParser}${myIdParser}`;
      setRoom(formatNameRoom);

      const resp = await api.get(`/load-messages/${formatNameRoom}`);

      if (resp.data && resp.data.messages) {
        setMessagesChat(resp.data.messages);
      }
      
      mySocket.emit("join-room", roomName);

      mySocket.on("send-message", (msgs) => {
        setMessagesChat(msgs);
      });
    };

    loadDependencies();
  }, [roomName]);

  const handlerMessage = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const messages = [
      ...messagesChat,
      {
        message,
        username: user.firstName + " " + user.lastName,
      },
    ];

    console.log(roomName);
    await api.post(`/send-message/${roomName}`, {
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
