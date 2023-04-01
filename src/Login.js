import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="username-email"
            name="username-email"
            placeholder="Enter your username or email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
