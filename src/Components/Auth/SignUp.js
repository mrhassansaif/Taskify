import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../FirebaseConfig/FirebaseConfig.js";

import "./SignUp.css";
import { Link, Navigate } from "react-router-dom";
import Todo from "../Todo/Todo.js";


function SignUpForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [Validate, setValidate] = useState(false);


  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  function SingUpUser() {
    let Sname = document.getElementById("SignUpName").value;
    let Semail = document.getElementById("SignUpEmail").value;
    let Spassword = document.getElementById("SignUpPassword").value;
    console.log(Sname, Semail, Spassword);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Semail, Spassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Done signing", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, errorMessage);
        // ..
      });
  }

  function LogInUser() {
    // let Lname = document.getElementById("LogInName").value;
    let Lemail = document.getElementById("LogInEmail").value;
    let Lpassword = document.getElementById("LogInPassword").value;
    console.log(Lemail, Lpassword);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Lemail, Lpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        setValidate(true)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
      });
  }

  return (
    <>

      {Validate ? (<Navigate to="/todo" />) : (<div className={`cont ${isSignUp ? "s--signup" : ""}`}>
        <div className="form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" id="LogInEmail" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" id="LogInPassword" />
          </label>
          <button type="button" className="submit" onClick={LogInUser}>
            Sign In
          </button>
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up to Taskify</p>
            </div>
            <div className="img__text m--in">
              <h2>Already, One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn" onClick={handleToggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" id="SignUpName" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" id="SignUpEmail" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" id="SignUpPassword" />
            </label>
            <button type="button" className="submit" onClick={SingUpUser}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

function SignUp() {
  return (
    <>
      <p className="tip">
        <b>Taskify the TaskMaster:</b> A robust and user-friendly TODO app built
        with React.
      </p>
      <SignUpForm />
    </>
  );
}

export default SignUp;
