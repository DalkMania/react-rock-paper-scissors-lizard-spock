import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IconRock from "../assets/svg/icon-rock.svg";
import IconPaper from "../assets/svg/icon-paper.svg";
import IconScissors from "../assets/svg/icon-scissors.svg";
import IconLizard from "../assets/svg/icon-lizard.svg";
import IconSpock from "../assets/svg/icon-spock.svg";

const ChoiceButton = ({ choice, playerPick = null, ...rest }) => {
    const { setPlayerMove } = useContext(GlobalContext);
    const iconPickList = [IconRock, IconPaper, IconScissors, IconLizard, IconSpock];
    const gradientPickList = [
        "bg-rock-gradient",
        "bg-paper-gradient",
        "bg-scissors-gradient",
        "bg-lizard-gradient",
        "bg-spock-gradient"
    ];

    return (
        <div {...rest}>
            <button
                onClick={() => setPlayerMove(choice)}
                className={`relative rounded-full h-28 w-28 flex justify-center items-center hover:cursor-pointer hover:animate-pulseScale hover:before:absolute hover:after:absolute hover:before:h-[135%] hover:before:w-[135%]hover:after:h-[135%] hover:after:w-[135%] hover:before:content-[''] hover:after:content-[''] ${gradientPickList[choice]}`}
            >
                <div className="rounded-full relative flex justify-center items-center bg-white h-[5.1rem] w-[5.1rem]">
                    <img className="relative h-[55%] w-[55%]" src={iconPickList[choice]} alt={""} />
                </div>
            </button>
            {playerPick && <p className="uppercase text-center mt-4">{`${playerPick} picked`}</p>}
        </div>
    );
};

export default ChoiceButton;
