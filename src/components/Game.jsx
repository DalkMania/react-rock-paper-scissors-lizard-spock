import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import GameBoard from "./GameBoard";
import GameResult from "./GameResult";

const Game = () => {
    const { playersMove } = useContext(GlobalContext);

    return <Fragment>{playersMove === null ? <GameBoard /> : <GameResult />}</Fragment>;
};

export default Game;
