import React, { useState } from "react";
import { RiChatSmile3Line } from "react-icons/ri";

import "./styles.css";

import api from "../../services/api";

function Auth(props) {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("");

  const handlerLogin = async () => {
    try {
      const response = await api.get(`/user?email=${email}`);
      if (!response.data) {
        setShowError(true);
        setErrorDisplay("Não existe usuário com este email ainda!");

        return setTimeout(() => {
          setShowError(false);
          setErrorDisplay("");
        }, 2000);
      }

      localStorage.setItem("tokenId", response.data._id);
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      return props.history.push("/users");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await api.post("/users", {
        email,
        firstName,
        lastName,
      })

      if (!response.data) {
        setShowError(true);
        setErrorDisplay("Erro ao cadastrar, tente novamente mais tarde");

        return setTimeout(() => {
          setShowError(false);
          setErrorDisplay("");
        }, 2000);
      }

      setIsSignUp(!isSignUp);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="top-title">
          <RiChatSmile3Line size="1.2em" />
          <span>ChatApp</span>
        </div>
        <div className="title-auth">Login</div>
        {showError ? (
          <div className="error-auth">
            {errorDisplay}
          </div>
        ) : (
          <></>
        )}
        <div className="auth-content">
          <div className="auth-inputs">
            {
              isSignUp ? (
                <>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="first-name">Primeiro Nome</label>
                  <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )
            }
          </div>
          <div className="auth-btn">
            {
              isSignUp ? (
                <button onClick={() => handleSignUp()}>Cadastrar</button>
              ) : (
                <button onClick={() => handlerLogin()}>Entrar</button>
              )
            }
          </div>
          <div onClick={() => setIsSignUp(!isSignUp)} className="link-signup">
            {
              isSignUp ? (
                'Já tenho conta'
              ) : (
                'Deseja cadastrar?'
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
