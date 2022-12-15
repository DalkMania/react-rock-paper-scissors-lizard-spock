import React from "react";
import ChoiceButton from "./ChoiceButton";
import Pentagon from "../assets/svg/bg-pentagon.svg";

const GameBoard = () => {
    const bgImage = { backgroundImage: `url(${Pentagon})` };
    const choiceEnum = { rock: 0, paper: 1, scissors: 2, lizard: 3, spock: 4 };

    return (
        <main
            className={`relative flex items-center flex-grow h-full bg-no-repeat max-h-xs max-w-xs min-w-[20rem] max-h-[20rem] bg-center bg-contain`}
            style={bgImage}
        >
            <ChoiceButton className="absolute -top-[2rem] left-[6rem]" choice={choiceEnum.rock} />
            <ChoiceButton className="absolute top-[5rem] -left-[2rem]" choice={choiceEnum.paper} />
            <ChoiceButton className="absolute top-[5rem] -right-[2rem]" choice={choiceEnum.scissors} />
            <ChoiceButton className="absolute -bottom-[2rem] left-[1rem]" choice={choiceEnum.lizard} />
            <ChoiceButton className="absolute -bottom-[2rem] right-[1rem]" choice={choiceEnum.spock} />
        </main>
    );
};

export default GameBoard;
