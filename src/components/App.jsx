import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";
import Popup from "./Popup";
import { GlobalProvider } from "../context/GlobalState";
import "@fontsource/barlow-semi-condensed";
import "../assets/css/base.css";

const App = () => {
    return (
        <GlobalProvider>
            <div className="relative flex flex-col p-6 items-center justify-between h-full">
                <Header />
                <Game />
                <Footer />
                <Popup />
            </div>
        </GlobalProvider>
    );
};

export default App;
