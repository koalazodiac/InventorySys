import React, { useRef, useState } from "react";
import "./LoginSignup.css";
import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize useNavigate inside the function

  const handleSubmit = async () => {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email.trim() || !password.trim() || (action === "Sign Up" && !name.trim())) {
      alert("Please fill out all fields.");
      return;
    }

    if (action === "Sign Up") {
      try {
        const response = await axios.post("http://localhost:5050/api/auth/register", {
          username: name,
          email,
          password,
        });

        alert("Sign up successful!");
        console.log(response.data);

        // Clear input fields after signup
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";

        // Automatically switch to Login after sign-up
        setAction("Login");
      } catch (error) {
        alert(error.response?.data?.message || "Sign up failed");
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5050/api/auth/login", {
          email,
          password,
        });

        alert("Login successful!");
        console.log(response.data);

        // Save JWT token to localStorage
        localStorage.setItem("token", response.data.token);

        // ✅ Redirect user to MainPage after successful login
        navigate("/main");

      } catch (error) {
        alert(error.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" ref={nameRef} />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" ref={emailRef} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
      </div>
      {/* {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )} */}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            if (action === "Sign Up") {
              handleSubmit();
            } else {
              setAction("Sign Up");
            }
          }}
        >
          Sign Up
        </div>

        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            if (action === "Login") {
              handleSubmit();
            } else {
              setAction("Login");
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
