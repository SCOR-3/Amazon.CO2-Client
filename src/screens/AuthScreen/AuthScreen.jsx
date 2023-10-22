import React from "react";
import {logo} from "../../assets/amazon-logo.png"

const AuthScreen = () => {
  return <div className="auth-wrapper">
    <img src={logo}/>
    <div className="auth-main-div">
        <p>Sign in</p>
        
    </div>
  </div>;
};

export default AuthScreen;
