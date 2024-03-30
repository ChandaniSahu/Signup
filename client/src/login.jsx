import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", pass: "" });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const Check = async () => {
    try {
      const res = await axios.post(
        "https://dmy438-3000.csb.app/api/getData",
        login,
      );
      console.log("login", res.data);
      if (res.data.msg == "successful") {
        navigate("/notes");
      } else if (res.data.msg == "failed") {
        alert("Invalid");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div id="Lcontainer">
        <h1>Login Page</h1>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            value={login.email}
            name="email"
            onChange={handleInput}
          />{" "}
        </div>
        <br /> <br />
        <div>
          <label>Password</label>
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            value={login.pass}
            name="pass"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <button onClick={Check}>Login</button>
      </div>
    </>
  );
};

export default Login;
