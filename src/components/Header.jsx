import React from "react";
import Score from "./Score";
import GameLogo from "../assets/svg/logo.svg";

const Header = () => {
    return (
        <header className="w-full h-32 flex items-center justify-between pt-4 pb-4 pl-8 pr-8 border-header-outline border-2 rounded-xl md:w-[40%]">
            <img className="object-contain h-full" src={GameLogo} alt="Rock, Paper, Scissors, Lizard, Spock!" />
            <Score />
        </header>
    );
};

export default Header;
