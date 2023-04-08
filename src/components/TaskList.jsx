//En este componente debe visualizarse la lista completa de tareas.
import {Task} from "./Task.jsx";
import {useState,useEffect} from "react";

export const TaskList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("tasks")));
    const [newTask, setNewTask] = useState("");

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(list))
    }, [list])

    const handleClickToAddTask = () => {
        if (!list.find(task => task.name === newTask)){
            setList([...list, {name:newTask,complete:false}])
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

    const handleCompleteTask = (completedTaskName,isCompleted) => {
        const newList = list.map((obj) => {
            if (obj.name === completedTaskName) {
                return { ...obj, complete: isCompleted};
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
                        <Task name={task.name} complete={task.complete} onClickDeleteTask={handleDeleteTask} onClickModifyTask={handleModifyTask} onClickCompleteTask={handleCompleteTask}/>
                    </li>
                ))}
            </ul>
        </>
    );
};