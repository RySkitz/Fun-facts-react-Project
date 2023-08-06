import React from "react"

export default function MainContent(){
    return (
        <>
            <div className="MainContent--Container">
                <h1 className="MainContent--Container__Header">
                    Fun facts about React 
                </h1>
                <ul className="MainContent--Container__List">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordal Walke</li>
                    <li>Has well over 100k stars in GitHub</li>
                    <li> Is maintained by Facebook </li>
                </ul>
            </div>
        </>
    )
};