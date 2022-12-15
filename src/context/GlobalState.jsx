import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    playersMove: null,
    computersMove: null,
    status: null,
    message: null,
    playerScore: 0,
    showRulesPopup: false
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setPlayerMove = (move) => {
        dispatch({
            type: "SET_PLAYER_MOVE",
            payload: move
        });
    };

    const setComputerMove = (move) => {
        dispatch({
            type: "SET_COMPUTER_MOVE",
            payload: move
        });
    };

    const setStatus = (status) => {
        dispatch({
            type: "SET_STATUS",
            payload: status
        });
    };

    const setPlayerScore = (score) => {
        dispatch({
            type: "SET_PLAYER_SCORE",
            payload: score
        });
    };

    const setMessage = (message) => {
        dispatch({
            type: "SET_MESSAGE",
            payload: message
        });
    };

    const resetGame = () => {
        dispatch({
            type: "RESET_GAME"
        });
    };

    const toggleRulesPopup = (toggle) => {
        dispatch({
            type: "TOGGLE_POPUP",
            payload: toggle
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                playersMove: state.playersMove,
                computersMove: state.computersMove,
                status: state.status,
                playerScore: state.playerScore,
                message: state.message,
                showRulesPopup: state.showRulesPopup,
                setPlayerMove,
                setComputerMove,
                setStatus,
                setPlayerScore,
                setMessage,
                toggleRulesPopup,
                resetGame
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
