import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Score = () => {
    const { playerScore } = useContext(GlobalContext);
    return (
        <div className="h-full bg-white p-2 text-score-text rounded-md min-w-[5rem] text-center uppercase font-bold text-sm shadow-md">
            Score
            <span className="block text-5xl text-dark-text">{playerScore}</span>
        </div>
    );
};

export default Score;
