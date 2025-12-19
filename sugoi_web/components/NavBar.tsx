// nav bar of about, experience, art, light and dark mode, music 

import React {useState} from 'react';
import Toggle from "react-toggle";
import "./NavBar.css";
import "./darkMode.css"; //dont have code for tsx and css for that

// omg look mom im learning T-T
const Navbar = () => {
    return (
        <nav className = "naviBar">
            <div className = "navinBar-left">
                <img>

                </img>
                <a href = '/' className = "logoname">
                    Lena Tran
                </a>
            <div className = "naviBar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/HomePage">About</a>
                    </li>
                    <li>
                        <a href="/ExperiencePage">Experience</a>
                    </li>
                    <li>
                        <a href="/ArtPage">Art</a>
                    </li>
                </ul>
            </div>

            </div>
        </nav>

    );

};