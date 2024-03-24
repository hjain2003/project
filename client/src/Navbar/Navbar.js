import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {useState} from "react";

import etherMate from "./Logo.svg";
import dashboardLogo from "./dasboard.svg";
import chatbotLogo from "./Chatbot.svg";
import depositsLogo from "./deposits.svg";
import profileLogo from "./user.svg";
import Charity from "../Charity/Charity";

const Navbar = () => {
  const [openCCard, setOpenCCard] = useState(false);

  const handleOpenCLogoClick = () => {
<<<<<<< HEAD
    
=======
>>>>>>> 9841328b846d77b0285eeeb05322083ee04f35c6
    setOpenCCard(true);
    
  };

  function CardCClose() {
    setOpenCCard(false);
  }

  return (
    <div className="navbar">
      <div className="emlogo">
        <img src={etherMate} alt="Logo" />
      </div>

      <Link to="/dashboard" className="linkremove">
        <div className="nav-element">
          <img src={dashboardLogo} className="nav-logo" alt="Dashboard" />
          <div className="nav-topic">Dashboard</div>
        </div>
      </Link>

      <Link to="/chatbot" className="linkremove">
        <div className="nav-element">
          <img src={chatbotLogo} className="nav-logo" alt="Chatbot" />
          <div className="nav-topic">Chatbot</div>
        </div>
      </Link>

<<<<<<< HEAD
      <Link to="/dashboard" className="linkremove">
=======
>>>>>>> 9841328b846d77b0285eeeb05322083ee04f35c6
      <div to="/" className="linkremove" onClick={handleOpenCLogoClick}>
        <div className="nav-element">
          <img src={depositsLogo} className="nav-logo" alt="Deposits" />
          <div className="nav-topic">Charity</div>
<<<<<<< HEAD
        </div>
      </div>
      </Link>

      <Link to="/split" className="linkremove">
        <div className="nav-element">
          <img src={profileLogo} className="nav-logo" alt="Profile" />
          <div className="nav-topic">Split</div>
=======
>>>>>>> 9841328b846d77b0285eeeb05322083ee04f35c6
        </div>
      </div>

<<<<<<< HEAD
=======
      <Link to="/" className="linkremove">
        <div className="nav-element">
          <img src={profileLogo} className="nav-logo" alt="Profile" />
          <div className="nav-topic">Profile</div>
        </div>
      </Link>

>>>>>>> 9841328b846d77b0285eeeb05322083ee04f35c6
      {openCCard && <Charity sopen={openCCard} onClose={CardCClose} />}
    </div>
  );
};

export default Navbar;
