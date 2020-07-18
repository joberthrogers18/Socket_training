import React, { useEffect, useState, useContext } from "react";
import socket from "socket.io-client";
import { RiChatOffLine } from "react-icons/ri";

import api from "../../services/api";
import "./styles.css";


import Navbar from "../../components/Navbars";
import { ChatContext } from "../../utils/context";



function ListUsers(props) {
  const { onlineUsers, users, setUsers, mySocket } = useContext(ChatContext)

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/users");
      if (response.data) {
        const tokenId = localStorage.getItem("tokenId");
        const filteredUsers = response.data.filter(
          (user) => user._id !== tokenId
        );
        setUsers(filteredUsers);
      }
    };

    loadUsers();
  }, []);

  const chooseUser = () => {
    props.history.push({
      pathname: "/chat/1",
      io: mySocket,
    });
  };

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <div className="list-users">
      <Navbar propsNav={props} io={mySocket} />
      <div className="list-user__wrapper-user">
        <div className="list-users__title">Lista de Usuários</div>
        <div className="list-users__list">
          {users.length === 0 ? (
            <div className="alert-chat">
              <RiChatOffLine size="1.2em" />
              <span>Não há usuário online</span>
            </div>
          ) : (
            <ul>
              {users.map((user, index) => (
                <li onClick={() => chooseUser()} key={index}>
                  {`${user.firstName} ${user.lastName}`}
                  {onlineUsers.includes(user._id) ? (
                    <div className="availability-user">Online</div>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListUsers;
