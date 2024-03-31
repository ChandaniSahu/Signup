import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addNoteID } from "./slice";
// this is login page 2 :
const Login = () => {
  const [login, setLogin] = useState({ email: "", pass: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };


  const Check = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/getData",
        login,
      );
      if (res.data.msg == "successful") {
        console.log("login",);
        dispatch(addNoteID(res.data.user._id))
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
