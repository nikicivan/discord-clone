import React from "react";
import "./login.css";

import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signin = () => {
    auth.signInWithPopup(provider).catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png"
          alt="logo"
        />
      </div>
      <Button onClick={signin}>Signin</Button>
    </div>
  );
};

export default Login;
