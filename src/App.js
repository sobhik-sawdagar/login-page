import React from "react";
import Header from './components/Header.jsx';
import Toggle from './components/Toggle.jsx';
import Credentials from "./components/Credential.jsx";
import LoginBtn from './components/LoginBtn.jsx';

import "./style.css"

const btn = document.getElementById('btn');

const adminToggle = () => btn.style.left = '0';
const userToggle = () => btn.style.left = '110px';


const App = () => {
  return (
    <div className="login-container">
      <Header />
      <Toggle admin = {adminToggle} user = {userToggle}/>
      <Credentials text = "User id"/>
      <Credentials text = "Password"/>
      <LoginBtn />
    </div>
  );
};

export default App;