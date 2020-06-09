import React from "react";
import "./styles.css";

function Auth() {
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="top-title">ChatApp</div>
        <div className="auth-content">
          <div className="auth-inputs">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="auth-btn">
            <button>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
