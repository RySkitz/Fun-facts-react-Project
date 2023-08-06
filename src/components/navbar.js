import React from "react"
import logo from "../images/react-logo.png"

export default function Navbar(){
    return (
        <>
            <nav>
                <div class="Logo">
                    <img src={logo} className="Logo--Image"/>
                    <h2 className="Logo--Text"> ReactFacts </h2>
                </div>
                <h3 className="Nav--h3"> React Course - Project 1 </h3>
            </nav>
        </>
    )
};