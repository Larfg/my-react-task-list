import {Header} from "./components/Header.jsx";
import {TaskList} from "./components/TaskList.jsx";
const tasks = [
    {name:"bruh"},
    {name:"moment"},
    {name:"checho"},
    {name:"lo pela"},
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
