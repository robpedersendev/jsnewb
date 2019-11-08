import React from 'react'
import './Navbar.css'

export default function Navbar() {

    // I will leave how you want to set up the links to you
    // this is just a super basic nav bar

    return (
        <div className="bar">
            <div className="nav-logo">LOGO</div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a>Blog</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    )
}
