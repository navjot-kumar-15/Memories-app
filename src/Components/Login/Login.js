import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  let navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });
    const json = await response.json();
    console.log(json);
    // Save the auth token and redirect
    localStorage.setItem("token", json.jwtAuthToken);
    navigate("/");
    props.showAlert("Login Successfully ", "success");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-md-12 col-xl-12 col-sm-12">
            <div className="log "></div>
          </div>
        </div>
        {/* <img className="img container-fluid" src={loginImg} alt="image" /> */}
        <img src="" alt="" className="img" />
        <form
          className="container d-flex flex-column justify-content-center align-items-center loginform"
          onSubmit={handleOnSubmit}
        >
          <div className="mb-3  text-start">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-start fs-4 email"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={cred.email}
              onChange={onChange}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3 text-start">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-start fs-4"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              name="password"
              value={cred.password}
              onChange={onChange}
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit" className="btn btn-primary  ">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
