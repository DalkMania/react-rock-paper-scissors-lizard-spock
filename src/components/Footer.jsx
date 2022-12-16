import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Footer = () => {
    const { toggleRulesPopup, setPlayerScore } = useContext(GlobalContext);
    const today = new Date();

    return (
        <footer className="flex w-full justify-between items-center">
            <p className="copyright text-sm md:text-base"> &copy; {today.getFullYear()} Niklas Dahlqvist</p>
            <div>
                <button
                    className="rounded-xl border-2 uppercase px-6 py-2 font-bold hover:cursor-pointer hover:animate-pulseScale mr-2 md:mr-4 text-xs md:text-base"
                    onClick={() => setPlayerScore(0)}
                >
                    Reset Score
                </button>
                <button
                    className="rounded-xl border-2 uppercase px-6 py-2 font-bold hover:cursor-pointer hover:animate-pulseScale text-xs md:text-base"
                    onClick={() => toggleRulesPopup(true)}
                >
                    Rules
                </button>
            </div>
        </footer>
    );
};

export default Footer;
