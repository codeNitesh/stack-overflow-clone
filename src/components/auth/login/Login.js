import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
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
      .post("http://localhost:3000/auth/login", data)
      .then((response) => {
        const { apiToken, user } = response.data;
        localStorage.setItem("token", apiToken);
        localStorage.setItem("user_id", user._id);
        setError("Login successful! Redirecting in 1 seconds");

        setTimeout(() => {
          window.location.href = "/app";
        }, 1000);
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("* " + error.response.data.message);
      });
  };

  const goToRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="login-body">
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="error">{error}</p>

          <div className="two-btn">
            <button type="submit">Login</button>
            <button className="long-btn" onClick={goToRegister}>Go to Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
