//En este componente debe visualizarse la lista completa de tareas.
import {Task} from "./Task.jsx";
export const TaskList = (props) => {
  const { list } = props;
  return (
    <ul>
        {list.map((task) => (
            <Task name={task.name}/>
        ))}
    </ul>
  );
};