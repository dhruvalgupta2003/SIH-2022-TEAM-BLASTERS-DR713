import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

// to get the authentication data
export const useAuth = () => useContext(AuthContext);

// provider which will provide the data to all routes
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const url = "http://localhost:5000/api/auth/login";

  const login = (username, password) => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          setUser({ token: data.accessToken });
          navigate("/home");
        } else if (data) {
          alert(data);
        } else {
          alert("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};