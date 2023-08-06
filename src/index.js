import React from "react"
import ReactDOM from "react-dom"
import "./style.css";
import Navbar from "./components/navbar"
import MainContent from "./components/maincontent";

ReactDOM.render(
    <>
        <Navbar/>
        <MainContent/>
    </>
    ,document.getElementById("root")
);
