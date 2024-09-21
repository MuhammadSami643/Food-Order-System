import React, { useState } from "react";
import { assets } from "../assets/assets";
import "../componentCSS/loginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <>
      <div className="login-popup">
        <form className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <div className="login-field">
            {currentState === "Log In" ? (
              <></>
            ) : (
              <input type="text" placeholder="your name" required />
            )}

            <input type="email" placeholder="your email" required />
            <input type="password" placeholder="your password" required />
          </div>
          <button>
            {currentState === "Sign Up" ? "Create Account" : "Log In"}
          </button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>
              By continuing, You agreed to the terms of use and privacy policy
            </p>
          </div>
          {currentState === "Log In" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurrentState("Log In")}>Login Here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
