//Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)

import {useState} from "react";

export function Task(props){
    const { onClickModifyTask,onClickDeleteTask } = props;
    const [name,setName] = useState(props.name)
    const firstName = props.name;
    const [showInputText, setShowInputText] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false);
    const handleClickModifyTask = () =>{
        setShowInputText(true)
    }

    const handleTaskChange = (event) =>{
        setName(event.target.value)
    }

    const  handleClickDeleteTask = () =>{
        onClickDeleteTask(name)
    }

    const handleSaveModifyTask = () => {
        onClickModifyTask(name,firstName)
        setShowInputText(false)
    }
    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return(
        <div style={{ display: "flex", alignItems: "center"}}>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
            />
            <p hidden={showInputText} style={{ margin: "10px", textDecoration: isCompleted ? "line-through" : "none" }}>{name}</p>
            <input type="text" value={name} onChange={handleTaskChange} hidden={!showInputText}/>
            <button onClick={handleSaveModifyTask} hidden={!showInputText}>Save Modify Task</button>
            <button onClick={handleClickModifyTask} hidden={showInputText}>Modify Task</button>
            <button onClick={handleClickDeleteTask} hidden={showInputText}>Delete Task</button>
        </div>
    )
}
