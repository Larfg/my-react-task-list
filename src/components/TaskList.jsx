import {Task} from "./Task.jsx";
import {useState,useEffect} from "react";
import useTaskList from "../hooks/useTaskList.jsx";

export const TaskList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("tasks")));
    const [newTask, setNewTask] = useState("");

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(list))
    }, [list])

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const { handleAddTask, handleDeleteTask, handleModifyTask } = useTaskList(list,setList,newTask);

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
    console.log(list)
    return (
        <>
            <input type="text" value={newTask} onChange={handleChange}/>
            <button onClick={handleAddTask}>Save Task</button>
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