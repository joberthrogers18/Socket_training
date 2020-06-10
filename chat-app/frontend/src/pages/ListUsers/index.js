import React, { useEffect, useState } from "react";
import socket from "socket.io-client";

import api from "../../services/api";
import "./styles.css";

import Navbar from "../../components/Navbars";

function ListUsers(props) {
  const [users, setUsers] = useState([]);
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const io = socket.connect("http://localhost:33356");

      io.on("users", (data) => {
        console.log("passou");
        console.log(data);
      });

      io.emit("connectUser", "teste");

      console.log(io);

      const response = await api.get("/users");
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  return (
    <div className="list-users">
      <Navbar propsNav={props} />
      <div className="list-user__wrapper-user">
        <div class="list-users__title">Lista de Usuários</div>
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
