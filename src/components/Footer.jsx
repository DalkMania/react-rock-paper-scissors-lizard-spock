import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Footer = () => {
    const { toggleRulesPopup } = useContext(GlobalContext);
    const today = new Date();
    return (
        <footer className="flex w-full justify-between items-center">
            <p className="copyright"> &copy; {today.getFullYear()} Niklas Dahlqvist</p>
            <button
                className="rounded-xl border-2 uppercase px-6 py-2 font-bold hover:cursor-pointer hover:animate-pulseScale"
                onClick={() => toggleRulesPopup(true)}
            >
                Rules
            </button>
        </footer>
    );
};

export default Footer;
