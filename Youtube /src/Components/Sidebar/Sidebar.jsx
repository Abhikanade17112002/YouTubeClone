import React from "react";
import "./Sidebar.css";
import homeicon from "../../assets/home.png";
import gameicon from "../../assets/game_icon.png";
import automobilesicon from "../../assets/automobiles.png";
import sportsicon from "../../assets/sports.png";
import entertainmenticon from "../../assets/entertainment.png";
import techicon from "../../assets/tech.png";
import musicicon from "../../assets/music.png";
import blogsicon from "../../assets/blogs.png";
import newsicon from "../../assets/news.png";
import jackicon from "../../assets/jack.png";
import simonicon from "../../assets/simon.png";
import tomicon from "../../assets/tom.png";
import meganicon from "../../assets/megan.png";
import cameronicon from "../../assets/cameron.png";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = ({ vedioCategory, setVedioCategory }) => {
  const [closeSideBar] = useOutletContext();

  return (
    <div className={` ${closeSideBar ? "sidebar smallsidebar" : "sidebar"}`}>
      <div className="shortcut-links">
        <NavLink  to="/0" className={({isActive})=>`${isActive?"active side-link":"side-link"}`} onClick={() => setVedioCategory(0)}>
          <img src={homeicon} alt="" />
         <p>home</p>
        </NavLink>
        <NavLink to="/:20" className={({isActive})=>`${isActive? "active side-link":"side-link"}`} onClick={() => setVedioCategory(20)}>
          <img src={gameicon} alt="" />
          <p>Gaming</p>
        </NavLink>
        <NavLink to="/:2" className={({isActive})=>`${isActive?"active side-link":" side-link"}`} onClick={() => setVedioCategory(2)}>
          <img src={automobilesicon} alt="" />
          <p>Automobiles</p>
        </NavLink>
        <NavLink to="/:17" className={({isActive})=>`${isActive?"active side-link":"side-link"}`} onClick={() => setVedioCategory(17)}>
          <img src={sportsicon} alt="" />
          <p>Sports</p>
        </NavLink>
        <NavLink to="/:24" className={({isActive})=>`${isActive?"active side-link":" side-link"}`} onClick={() => setVedioCategory(24)}>
          <img src={entertainmenticon} alt="" />
          <p>Entertainment</p>
        </NavLink>
        <NavLink to="/:28" className={({isActive})=>`${isActive?"active side-link":" side-link"}`} onClick={() => setVedioCategory(28)}>
          <img src={techicon} alt="" />
          <p>Technology</p>
        </NavLink>
        <NavLink to="/:10" className={({isActive})=>`${isActive?"active side-link":"side-link"}`} onClick={() => setVedioCategory(10)}>
          <img src={musicicon} alt="" />
          <p>Music</p>
        </NavLink>
        <NavLink to={'/22'} className={({isActive})=>`${isActive?"active side-link":"side-link"}`} onClick={() => setVedioCategory(22)}>
          <img src={blogsicon} alt="" />
          <p>Blogs</p>
        </NavLink>
        <NavLink  to={"/25"}className={({isActive})=>`${isActive?"active side-link":"side-link"}`} onClick={() => setVedioCategory(25)}>
          <img src={newsicon} alt="" />
          <p>news</p>
        </NavLink>

        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jackicon} alt="" />
          <p>PwieDiePie</p>
        </div>
        <div className="side-link">
          <img src={simonicon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tomicon} alt="" />
          <p>Justin</p>
        </div>
        <div className="side-link">
          <img src={meganicon} alt="" />
          <p>5-Minutes Craft</p>
        </div>
        <div className="side-link">
          <img src={cameronicon} alt="" />
          <p>Nas daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
