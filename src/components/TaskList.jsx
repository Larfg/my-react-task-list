//En este componente debe visualizarse la lista completa de tareas.
import {Task} from "./Task.jsx";
import {useState} from "react";

export const TaskList = (props) => {
    const [list, setList] = useState(props.list);
    const [newTask, setNewTask] = useState("");

    const handleClickToAddTask = () => {
        if (!list.find(task => task.name === newTask)){
            setList([...list, {name:newTask}])
        }
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleDeleteTask = (taskName) => {
        setList(list.filter((obj) => obj.name !== taskName));
    };

    const handleModifyTask = (modifiedName,originalName) => {
        const newList = list.map((obj) => {
            if (obj.name === originalName) {
                return { ...obj, name: modifiedName};
            } else {
                return obj;
            }
        });
        setList(newList)
    }

    return (
        <>
            <input type="text" value={newTask} onChange={handleChange}/>
            <button onClick={handleClickToAddTask}>Save Task</button>
            <ul>
                {list.map((task) => (
                    <li key={task.name}>
                        <Task name={task.name} onClickDeleteTask={handleDeleteTask} onClickModifyTask={handleModifyTask}/>
                    </li>
                ))}
            </ul>
        </>
    );
};