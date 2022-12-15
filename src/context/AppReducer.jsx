const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYER_MOVE":
            return {
                ...state,
                playersMove: action.payload
            };
        case "SET_COMPUTER_MOVE":
            return {
                ...state,
                computersMove: action.payload
            };
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload
            };
        case "SET_PLAYER_SCORE":
            return {
                ...state,
                playerScore: action.payload
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            };
        case "RESET_GAME":
            return {
                ...state,
                message: null,
                status: null,
                playersMove: null,
                computersMove: null
            };
        case "TOGGLE_POPUP":
            return {
                ...state,
                showRulesPopup: action.payload
            };
        default:
            return state;
    }
};

export default AppReducer;
