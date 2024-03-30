import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState({
    uname: "",
    mono: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const SetData = async () => {
    try {
      console.log("signup clientside");

      if (
        !signup.uname ||
        !signup.mono ||
        !signup.email ||
        !signup.pass ||
        !signup.cpass
      ) {
        alert("All the fields are mendetary");
      } else if (signup.pass != signup.cpass) {
        alert("Check your confirm password");
      } else {
        console.log("enter to send to api");
        const res = await axios.post(
          "http://localhost:3000/api/setData",
          signup,
        );
        console.log("Sinup response", res);
        if (res.data.msg == "UAE" || res.data.msg == "SS") {
          navigate("/login");
        } else {
          alert("internal server error");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div id="Scontainer">
        <h1>Registration Page</h1>
        <div>
          <label>Username : </label>
          <br />
          <input
            type="text"
            placeholder="Enter your username"
            value={signup.uname}
            name="uname"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <div>
          <label>Mobile No. : </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Mobile No."
            value={signup.mono}
            name="mono"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <div>
          <label>Email : </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Mobile No."
            value={signup.email}
            name="email"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <div>
          <label>Password : </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Mobile No."
            value={signup.pass}
            name="pass"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <div>
          <label> Confirm Password : </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Mobile No."
            value={signup.cpass}
            name="cpass"
            onChange={handleInput}
          />
        </div>
        <br /> <br />
        <button onClick={SetData}>Check</button>
      </div>
    </>
  );
};

export default Signup;
