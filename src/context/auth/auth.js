// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser } from "./comp/Login";

export const AuthContext = React.createContext({
    isAuth: false,
    access: localStorage.getItem('access'),
    // refresh: localStorage.getItem('refresh'),
    user: localStorage.getItem('user'),
    error: "",
    success: false,
    loading: false,
    login: (value) => {},
    logout: () => {}
});


export const AuthProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)
    const [isAuth, setisAuth] = useState(false)
    const Login = (details) => {
      // console.log(details)
      setIsloading(true)
      loginUser(details)
        .then((res) => {
          console.log(res.data.data.email, "token")
          setsucess(true);
          setError("");
          setisAuth(true)
          localStorage.setItem('access', res.data.data.token)
          // localStorage.setItem('refresh', res.data.refresh)
          localStorage.setItem('user', res.data.data.email)
          setIsloading(false)
      })
      .catch((err) => {
        console.log(err)
          setIsloading(false)
          setsucess(false);
          setisAuth(false)
          setError(err.response);
          localStorage.removeItem('access')
          // localStorage.removeItem('refresh', null)
          localStorage.removeItem('user')
      })
};
      const logout = () => {
        console.log('logging out');
        localStorage.removeItem('access')
        setIsloading(false)
        setError("")
        setisAuth(false)
        localStorage.removeItem('user')
      }
    return (
      <AuthContext.Provider
        value={{
          isAuth: isAuth,
          access: localStorage.getItem('access'),
          // refresh: localStorage.getItem('refresh'),
          user: localStorage.getItem('user'),
          error,
          success,
          loading,
          login: Login,
          logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);