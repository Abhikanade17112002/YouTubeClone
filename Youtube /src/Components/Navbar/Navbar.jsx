import React, { useState } from "react";
import "./Navbar.css";
import menuicon from "../../assets/menu.png";
import youtubelogo from "../../assets/logo.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import userprofile from "../../assets/jack.png";
import searchicon from "../../assets/search.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


const Navbar = ({closeSideBar , setCloseSideBar,setVedioCategory}) => {
const [ hamburgerClicked , setHamburgerClicked ] = useState(false) ;
  return (
    <nav className="div-flex ">
      <div className="nav-left div-flex">
        <img src={menuicon} alt="MENU-ICON" className="menu-icon" onClick={()=>setCloseSideBar(!closeSideBar)}/>
       <Link to={`/`} ><img src={youtubelogo} alt="YOUTUBE-LOGO" className="youtube-logo" onClick={()=>setVedioCategory(0)}  /></Link> 
      </div>

      <div className="nav-middle div-flex">
        <div className="search-box div-flex">
          <input type="text" className="search-input" placeholder="search..." />
          <div className="searchbutton">
          <img
            src={searchicon}
            alt="SEARCH-ICON"
            className="search-icon"
          />
          </div>
          
        </div>
      </div>
      <div className="hamburgermenu" onClick={()=>setHamburgerClicked(!hamburgerClicked)}>
        {
          hamburgerClicked?<ImCross></ImCross>:<GiHamburgerMenu></GiHamburgerMenu> 
        }

      <div className={`${ hamburgerClicked? "small-nav-bar " :"small-nav-bar close"} div-flex`}>
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={userprofile} className="user-profile" alt="" />
      </div>
      </div>
      <div className={`nav-right div-flex`}>
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={userprofile} className="user-profile" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
