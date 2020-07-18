import React, { createContext, useEffect, useState } from "react";
import socket from "socket.io-client";

export const ChatContext = createContext();

export const ChatProvider = (props) => {
  const [mySocket, setMySocket] = useState(null);
  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const loadDependences = () => {
      const io = socket.connect("http://localhost:33356");
      setMySocket(io);

      io.on("disconnect", (reason) => {
        console.log(reason);
      });

      io.on("login_user", (newUserConnected) => {
        if (newUserConnected) {
          console.log(newUserConnected);
          setOnlineUsers([...onlineUsers, newUserConnected._id]);
        }
      });

      io.on("disconnect-user", (idUser) => {
        console.log(idUser);
        const newUsers = onlineUsers.filter((user) => user !== idUser);
        setOnlineUsers(newUsers);
      });
    };

    loadDependences();
  }, [users, onlineUsers]);

  return (
    <ChatContext.Provider value={{mySocket, users, setUsers, onlineUsers, setOnlineUsers}}>
      {props.children}
    </ChatContext.Provider>
  );
}