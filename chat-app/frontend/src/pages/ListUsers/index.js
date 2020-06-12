import React, { useEffect, useState } from "react";
import socket from "socket.io-client";

import "./styles.css";

import Navbar from "../../components/Navbars";

function ListUsers(props) {
  const [users, setUsers] = useState([]);
  const [mySocket, setMySocket] = useState(null);
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const io = socket.connect("http://localhost:33356");
      setMySocket(io);

      io.on("login_user", (newUserConnected) => {
        setUsers([...users, newUserConnected]);
      });

      io.on("disconnect-user", (idUser) => {
        const newUsers = users.filter((user) => user._id !== idUser);
        setUsers(newUsers);
      });
    };

    loadUsers();
  }, [users]);

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
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {`${user.firstName} ${user.lastName}`}
                <div className="availability-user">Online</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListUsers;
