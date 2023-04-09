import {Task} from "./Task.jsx";
import {useState, useEffect} from "react";
import useTaskList from "../hooks/UseTaskList.jsx";
import {useForm} from "react-hook-form";
import { Button, Divider, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";

export const TaskList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("tasks")));
    const {register, handleSubmit, formState: {errors, isValid, isSubmitting}} = useForm({mode: "onChange"});
    const onSubmit = (data) => {
        handleAddTask(data.name, data.description);
    };


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(list))
    }, [list])


    const {handleAddTask, handleDeleteTask, handleModifyTask} = useTaskList(list, setList);

    const handleCompleteTask = (completedTaskName, isCompleted) => {
        const newList = list.map((obj) => {
            if (obj.name === completedTaskName) {
                return {...obj, complete: isCompleted};
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
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Task Name</FormLabel>
                    <Input id="name" placeholder="New Task" {...register("name", {
                        required: "A task name is required",
                        minLength: { value: 3, message: "Tasks must have at least 3 characters" }
                    })} />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="description">Task Description</FormLabel>
                    <Input id="description" placeholder="Task Description" {...register("description")} />
                </FormControl>
                <Button type="submit" mt={4} fontSize="1.2rem" fontWeight="bold" textDecoration="none" size="sm" colorScheme='green' variant='outline' disabled={!isValid || isSubmitting}>Save Task</Button>
            </form>
            <Divider
                borderWidth="2px"
                height="4px"
                orientation="horizontal"
                my="1rem"
                borderColor="black"
            />
            <ul>
                {list.map((task) => (
                    <li key={task.name}>
                        <Task name={task.name} complete={task.complete} onClickDeleteTask={handleDeleteTask}
                              onClickModifyTask={handleModifyTask} onClickCompleteTask={handleCompleteTask}/>
                    </li>
                ))}
            </ul>
        </>
    );
};