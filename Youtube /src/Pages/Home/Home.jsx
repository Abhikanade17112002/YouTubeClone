import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import { useOutletContext } from "react-router-dom";
import PlayVedio from "../../Components/PlayVedio/PlayVedio";
const Home = () => {
  const [closeSideBar,vedioCategory,setVedioCategory] = useOutletContext();
  
  return (
    <>
      <Sidebar
        vedioCategory={vedioCategory}
        setVedioCategory={setVedioCategory}
      ></Sidebar>
      <div
        className={`${
          closeSideBar ? "container large-container" : "container"
        }`}
      >
        <Feed vedioCategory={vedioCategory} ></Feed>
      </div>
    </>
  );
};

export default Home;
