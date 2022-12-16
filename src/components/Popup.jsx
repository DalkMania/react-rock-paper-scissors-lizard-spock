import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RulesImage from "../assets/svg/image-rules.svg";
import CloseIcon from "../assets/svg/icon-close.svg";

const Popup = () => {
    const { showRulesPopup, toggleRulesPopup } = useContext(GlobalContext);
    const toggleClass = !showRulesPopup ? "hidden" : "";

    return (
        <div
            className={`absolute flex flex-col items-center justify-evenly  min-w-[30rem] min-h-[30rem] bg-white -m-6 translate-y-24 shadow-2xl rounded-xl ${toggleClass}`}
        >
            <h1 className="text-center text-dark-text uppercase text-3xl">Rules</h1>
            <img src={RulesImage} alt="Rules Image" />
            <img
                className="hover:cursor-pointer"
                src={CloseIcon}
                alt="Rules Image"
                onClick={() => toggleRulesPopup(false)}
            />
        </div>
    );
};

export default Popup;
