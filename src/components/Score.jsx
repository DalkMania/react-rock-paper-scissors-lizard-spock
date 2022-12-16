import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Score = () => {
    const [score, setScore] = useLocalStorage("score", 0);
    const { playerScore, useStorage, setPlayerScore } = useContext(GlobalContext);

    useEffect(() => {
        setPlayerScore(score);
    }, []);

    useEffect(() => {
        setScore(playerScore);
    }, [playerScore]);

    return (
        <div className="h-full bg-white p-2 text-score-text rounded-md min-w-[5rem] text-center uppercase font-bold text-sm shadow-md">
            Score
            <span className="block text-5xl text-dark-text">{playerScore}</span>
        </div>
    );
};

export default Score;
