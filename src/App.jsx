import {Header} from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Menu} from "./components/Menu.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {AboutUsPage} from "./pages/AboutUsPage.jsx";
import {TaskListPage} from "./pages/TaskListPage.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Menu/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/task-list" element={<TaskListPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
