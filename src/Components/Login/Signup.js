import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";
function Signup() {
  let navigate = useNavigate();

  const [cred, setCred] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = cred;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    // Save the auth token and redirect
    localStorage.setItem("token", json.jwtAuthToken);
    navigate("/");
  };
  return (
    <>
      <div className="contianer-fluid main-sign">
        <div className="signCont">
          <form onSubmit={handleSubmit}>
            <h3 className="sign-h">signup form</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={cred.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={cred.email}
                onChange={onChange}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={cred.password}
                onChange={onChange}
                placeholder="Enter Your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
