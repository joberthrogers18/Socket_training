import React from "react";
import "./App.css";

import Routes from "./routes";

function App() {
  // const handlerCreate = async (event) => {
  //   event.preventDefault();

  //   if (email && firstName && lastName) {
  //     try {
  //       const user = await api.post("/users", {
  //         email,
  //         firstName,
  //         lastName,
  //       });

  //       console.log(user);
  //     } catch (err) {
  //       console.log("Não foi possível cadastrar");
  //     }
  //   }
  // };

  return (
    <div className="app">
      <Routes />
      {/* <h1>Usuários</h1>
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
      </form> */}
    </div>
  );
}

export default App;
