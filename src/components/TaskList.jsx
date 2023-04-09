import {Task} from "./Task.jsx";
import {useState,useEffect} from "react";
import useTaskList from "../hooks/UseTaskList.jsx";
import {useForm} from "react-hook-form";

export const TaskList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("tasks")));
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }} = useForm({mode: "onChange"});
    const onSubmit = (data) => {
        handleAddTask(data.name,data.description);
    };


    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(list))
    }, [list])


    const { handleAddTask, handleDeleteTask, handleModifyTask } = useTaskList(list,setList);

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={"new task"} {...register("name",{required:"a task name is required",minLength:{value:3,message:"tasks must have at least 3 characters"}})}/>
                <span className="error" role="alert">
                    {errors.name?.message}
                </span>
                <input type="text" placeholder={"task description"} {...register("description")}/>
                <button disabled={!isValid || isSubmitting}>Save task</button>
            </form>
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