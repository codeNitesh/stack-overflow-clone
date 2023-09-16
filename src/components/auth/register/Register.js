import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    axios
      .post("http://localhost:3000/auth/register", data)
      .then((response) => {
        console.log("Registered successfully");

        setError("Registration successful! Redirecting to login in 1 seconds");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        if (error.response.data.message) {
          setError("* " + error.response.data.message);
        } else {
          setError("* " + error.response.data.error);
        }
      });
  };

  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="login-body">
      <div className="form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="error">{error}</p>

          <div className="two-btn">
            <button type="submit">Register</button>
            <button className="long-btn" onClick={goToLogin}>Go To Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
