import "./App.css";
import LoadingPage from "./Experience/component/dom/LoadingPage";
import DarkModeToggle from "./Experience/component/dom/DarkModeToggle";
import Experience from "./Experience/Experience";

function App() {
    return (
        <>
            <LoadingPage />
            <DarkModeToggle />
            <Experience />
        </>
    );
}

export default App;
