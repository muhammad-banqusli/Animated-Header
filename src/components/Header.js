import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const toggleNav = () => setIsNavActive(!isNavActive);
    const NavLi = ({ to, text }) => (
        <li onClick={toggleNav}>
            <Link to={to}>{text}</Link>
        </li>
    );

    const navList = [
        { to: "/", text: "Home" },
        { to: "/forum", text: "Forum" },
        { to: "/about", text: "About" },
        { to: "/contact", text: "Contact" },
    ];

    return (
        <header>
            <section className="header-title-line">
                <h1>Acme Co.</h1>
                <button className="menu-button" onClick={toggleNav}>
                    <div
                        className={`menu-icon ${
                            isNavActive ? "menu-icon-active" : ""
                        }`}
                    ></div>
                </button>
            </section>

            <nav className={isNavActive ? "nav-active" : ""}>
                <ul>
                    {navList.map((item) => (
                        <NavLi key={item.text} text={item.text} to={item.to} />
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
