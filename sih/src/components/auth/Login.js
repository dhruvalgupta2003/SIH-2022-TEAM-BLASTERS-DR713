import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../../styles/Login.module.css";

export const Login = () => {
  const { login } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    login(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="main" style={{padding:"100px"}}>
    <div className={styles.login}>
      <h2>Admin Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <button type="submit">Login </button>
      </form>
    </div>
    </div>
  );
};