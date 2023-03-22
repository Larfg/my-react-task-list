//Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)

import {useState} from "react";

export function Task(props){
    const { onClickModifyTask,onClickDeleteTask } = props;
    const [name,setName] = useState(props.name)
    const [showInputText, setShowInputText] = useState(false)
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
        onClickDeleteTask(name)
        onClickModifyTask(name)
        setShowInputText(false)
    }

    return(
        <li>
            <p hidden={showInputText}>{name}</p>
            <input type="text" value={name} onChange={handleTaskChange} hidden={!showInputText}/>
            <button onClick={handleSaveModifyTask} hidden={!showInputText}>Save Modify Task</button>
            <button onClick={handleClickModifyTask}>Modify Task</button>
            <button onClick={handleClickDeleteTask}>Delete Task</button>
        </li>
    )
}
