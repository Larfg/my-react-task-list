import {Header} from "./components/Header.jsx";
import {TaskList} from "./components/TaskList.jsx";

const tasks = [
    {name: "lavar platos"},
    {name: "trabajo ieti"},
    {name: "presentacion seguridad"},
    {name: "pasear el perro"},
];

function App() {
    return (
        <div className="App">
            <Header/>
            <TaskList list={tasks}/>
        </div>
    )
}

export default App;
