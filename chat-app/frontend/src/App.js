import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";
import socket from "socket.io-client";

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  const handlerCreate = async (event) => {
    event.preventDefault();

    if (email && firstName && lastName) {
      try {
        const user = await api.post("/users", {
          email,
          firstName,
          lastName,
        });

        console.log(user);
      } catch (err) {
        console.log("Não foi possível cadastrar");
      }
    }
  };

  return (
    <div className="app">
      <h1>Usuários</h1>
      {users.map((user) => (
        <h3 key={user._id}>{`${user.firstName} ${user.lastName}`}</h3>
      ))}

      <form onSubmit={handlerCreate}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="firstName">Nome</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
