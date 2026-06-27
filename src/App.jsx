import "./App.css";
import LoadingPage from "./Experience/component/dom/LoadingPage";
import DarkModeToggle from "./Experience/component/dom/DarkModeToggle";
import ResetCameraButton from "./Experience/component/dom/ResetCameraButton";
import Experience from "./Experience/Experience";

function App() {
    return (
        <>
            <LoadingPage />
            <DarkModeToggle />
            <ResetCameraButton />
            <Experience />
        </>
    );
}

export default App;
