import {Header} from "./components/Header.jsx";
import {TaskList} from "./components/TaskList.jsx";
const tasks = [
    {name:"bruh"},
    {name:"moment"},
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
