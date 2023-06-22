import React from "react";
import Nav from "./Nav";
import "../styles/Home.css";

function Home() {
    return (
        <div>
        <Nav />
        <div className="home-section">
        <div className="home-content">
            <h1>Hi! <br/>I am a Fullstack developer and Flutter developer.
            </h1>
            <button className="home-button">Contact Me:)</button>
        </div>
        <div className="home-photo">
            {
            <img 
                src = "https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.png"
            alt="Dilanka Ranepurage" />
            }
        </div>
        </div></div>
    );
}

export default Home;