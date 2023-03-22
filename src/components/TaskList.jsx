//En este componente debe visualizarse la lista completa de tareas.
import {Task} from "./Task.jsx";
import {useState} from "react";

export const TaskList = (props) => {
  const [list, setList] = useState(props.list);
  const [newTask, setNewTask] = useState("");

  const handleClickToAddTask = () => {
    setList([...list,{name:newTask}])
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleDeleteTask = (taskName) =>{
      setList(list.filter((obj) => obj.name !== taskName));
  };

  const handleModifyTask = (taskName) =>{
      setList([...list,{name:taskName}])
  }

  return (
      <>
          <input type="text" value={newTask} onChange={handleChange}/>
          <button onClick={handleClickToAddTask}>Save Task</button>
      <ul>
          {list.map((task) => (
              <Task name={task.name} onClickDeleteTask={handleDeleteTask} onClickModifyTask={handleModifyTask}/>
          ))}
      </ul>
      </>
  );
};