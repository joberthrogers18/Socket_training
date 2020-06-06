import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/users");
      setUsers(response.data);
    };

    loadUsers();
  }, []);

  return (
    <div className="App">
      <h1>teste</h1>
      {users.map((user) => (
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
      ))}
    </div>
  );
}

export default App;
