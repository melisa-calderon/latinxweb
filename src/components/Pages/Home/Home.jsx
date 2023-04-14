import React from "react";
import Navbar from "../../Navbar/Navbar";
import Hero from "./Hero/Hero"
import Tab from "./Tab/tab"
import { pages } from "../pages";
import "../main.css";
import "./home.css"
const Home = () => {
    return (
      <div className="bg-bgGreen">
        <Navbar />
        <Hero />
        <div className="web-intro">
          <h1>Site Overview</h1>
          <p> Below is an overview of the information the website has to offer. If you have a sense of the information you’d like to access,  you can click on the given section.</p>
        </div>
        {pages.slice(1).map((page) => (
            <Tab headerText={page.name} bodyText={page.description} bkColor={page.color} />

        ))}
      </div>
    );
  };
export default Home;