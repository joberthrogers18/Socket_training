import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";

function Auth(props) {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handlerLogin = async () => {
    try {
      const response = await api.get(`/user?email=${email}`);

      if (!response.data) {
        setShowError(true);

        return setTimeout(() => {
          setShowError(false);
        }, 2000);
      }

      localStorage.setItem("tokenId", response.data._id);

      return props.history.push("/users");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="top-title">ChatApp</div>
        <div className="title-auth">Login</div>
        {showError ? (
          <div className="error-auth">
            Não existe usuário com este email ainda!
          </div>
        ) : (
          <></>
        )}
        <div className="auth-content">
          <div className="auth-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-btn">
            <button onClick={() => handlerLogin()}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
