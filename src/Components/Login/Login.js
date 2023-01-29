import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  let navigate = useNavigate();
  const [Credentials, setCredentials] = useState({ email: "", password: "" });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.jwtAuthToken);
      props.showAlert("Login Successfully ", "success");
      navigate("/");
    } else {
      alert("invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    // console.log(e);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-md-12 col-xl-12 col-sm-12">
            <div className="log "></div>
          </div>
        </div>
        <img src="" alt="" className="img" />
        <form
          className="container d-flex flex-column justify-content-center align-items-center loginform"
          onSubmit={handleOnSubmit}
        >
          <h3 className="login-h">Login Form</h3>
          <div className="mb-3  text-start">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-start  email"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={Credentials.email}
              onChange={onChange}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3 text-start">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-start "
            >
              Password
            </label>
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              name="password"
              value={Credentials.password}
              onChange={onChange}
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-login  ">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
