import React, { useState } from "react";
import Image from "../../components/Image/Image";
import "./authPage.css";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <div className="authPage">
        <div className="authContainer">
          <Image path="/general/logo.png" w={36} h={36} alt="" />
          <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
          {isRegister ? (
            <form key="register" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  placeholder="Username"
                  required
                  name="username"
                  id="username"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="displayName">Name</label>
                <input
                  type="displayName"
                  placeholder="Name"
                  required
                  name="displayName"
                  id="displayName"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  id="email"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  id="password"
                />
              </div>
              <button type="submit">Register</button>
              <p onClick={() => setIsRegister(false)}>
                Do you have an account? <b>Login</b>
              </p>
              {error && <p className="error">{error}</p>}
            </form>
          ) : (
            <form key="loginForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  id="email"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  id="password"
                />
              </div>
              <button type="submit">Login</button>
              <p onClick={() => setIsRegister(true)}>
                Don&apos;t have an account? <b>Register</b>
              </p>
              {error && <p className="error">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
