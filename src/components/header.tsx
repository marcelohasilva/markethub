import React from "react";
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-white flex items-center px-8 shadow-sm z-50 ">
            <img className="h-30 w-auto" src={logo} alt="Logo" />
        </header>
    );
}