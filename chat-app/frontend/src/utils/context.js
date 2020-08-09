import React, { createContext, useEffect, useState } from "react";
import socket from "socket.io-client";

export const ChatContext = createContext();

export const ChatProvider = (props) => {
  // const [mySocket, setMySocket] = useState();
  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [usersNotify, setUserNotify] = useState([]);

  // useEffect(() => {
  //   const loadDependences = () => {

  const mySocket = socket.connect("http://localhost:33356");

  mySocket.on("disconnect", (reason) => {
    console.log(reason);
  });

  mySocket.on("login_user", (newUserConnected) => {
    if (newUserConnected) {
      console.log(newUserConnected);
      setOnlineUsers([...onlineUsers, newUserConnected._id]);
    }
  });

  mySocket.on("message-send-to", (idUser) => {
    setUserNotify([idUser, ...usersNotify]);
    console.log(usersNotify);
  })

  mySocket.on("disconnect-user", (idUser) => {
    console.log(idUser);
    const newUsers = onlineUsers.filter((user) => user !== idUser);
    setOnlineUsers(newUsers);
  });

  //   };

  //   loadDependences();
  // }, [users, onlineUsers]);

  return (
    <ChatContext.Provider value={{mySocket, users, setUsers, onlineUsers, setOnlineUsers, usersNotify, setUserNotify }}>
      {props.children}
    </ChatContext.Provider>
  );
}