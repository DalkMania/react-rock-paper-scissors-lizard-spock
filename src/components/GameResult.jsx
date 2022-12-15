import React, { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ChoiceButton from "./ChoiceButton";
import { checkWinner } from "../utils/checkWinner";

const GameResult = () => {
    const {
        playersMove,
        computersMove,
        playerScore,
        setPlayerScore,
        setComputerMove,
        status,
        setStatus,
        message,
        setMessage,
        resetGame
    } = useContext(GlobalContext);

    useEffect(() => {
        if (!computersMove) {
            const cpuMove = Math.floor(Math.random() * 10) % 5;
            const timer = setTimeout(() => {
                setComputerMove(cpuMove);
                const [winner, message] = checkWinner(cpuMove, playersMove);

                if (winner === -1) {
                    setStatus("Tie");
                    setMessage(message);
                    return;
                }

                if (winner === cpuMove) {
                    setStatus("Computer Wins");
                    setMessage(message);
                    setPlayerScore(playerScore - 1);
                    return;
                }

                if (winner === playersMove) {
                    setStatus("Player Wins");
                    setMessage(message);
                    setPlayerScore(playerScore + 1);
                    return;
                }
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <main
            className={`relative flex flex-col uppercase items-center flex-grow h-full w-full max-h-xs max-w-md mt-8 font-bold`}
        >
            <div className="flex justify-between w-full mb-8">
                <ChoiceButton choice={playersMove} playerPick={`You`} />
                {computersMove !== null && <ChoiceButton choice={computersMove} playerPick={`The House`} />}
            </div>
            <div className="flex flex-col w-full items-center text-4xl text-center gap-4">
                {status && message && (
                    <Fragment>
                        <p>{status}</p>
                        <p>{message}</p>
                        <button
                            className="bg-white px-8 py-4 rounded-xl mt-8 uppercase text-dark-text text-xl hover:cursor-pointer hover:animate-pulseScale"
                            onClick={() => resetGame()}
                        >
                            Play Again
                        </button>
                    </Fragment>
                )}
            </div>
        </main>
    );
};

export default GameResult;
