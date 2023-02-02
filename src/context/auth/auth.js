// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser } from "./comp/Login";

export const AuthContext = React.createContext({
    isAuth: localStorage.getItem('access')?true:false,
    access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    user: localStorage.getItem('user'),
    error: "",
    success: false,
    loading: false,
    login: (value) => {},
});


export const AuthProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)

    const Login = (details) => {
      // console.log(details)
      setIsloading(true)
      loginUser(details)
        .then((res) => {
          console.log(res.data.data.email, "token")
          setsucess(true);
          setError("");
          localStorage.setItem('access', res.data.data.token)
          // localStorage.setItem('refresh', res.data.refresh)
          localStorage.setItem('user', res.data.data.email)
          setIsloading(false)
      })
      .catch((err) => {
        console.log(err)
          setIsloading(true)
          setIsloading(false)
          setsucess(false);
          setError(err.response);
          localStorage.removeItem('access', null)
          // localStorage.removeItem('refresh', null)
          localStorage.removeItem('user', null)
      })
};
    return (
      <AuthContext.Provider
        value={{
          isAuth: localStorage.getItem('access')?true:false,
          access: localStorage.getItem('access'),
          // refresh: localStorage.getItem('refresh'),
          user: localStorage.getItem('user'),
          error,
          success,
          loading,
          login: Login,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);