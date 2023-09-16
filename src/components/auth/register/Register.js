import React, { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    axios
      .post("http://localhost:3000/auth/register", data)
      .then((response) => {
        setRegistrationSuccessful(true);
        console.log("Registered successfully");
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  useEffect(() => {
    if (registrationSuccessful) {
      window.location.href = 'login';
    }
  }, [registrationSuccessful]);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
