import {useState} from "react";
import {Button, Checkbox, Text} from "@chakra-ui/react";

export function Task(props){
    const { onClickModifyTask,onClickDeleteTask,onClickCompleteTask } = props;
    const [name,setName] = useState(props.name)
    const firstName = props.name;
    const [showInputText, setShowInputText] = useState(false)
    const [isCompleted, setIsCompleted] = useState(props.complete);
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
        onClickCompleteTask(name,!isCompleted);
    };

    return(
        <div style={{ display: "flex", alignItems: "center"}}>
            <Checkbox isChecked={isCompleted} onChange={handleCheckboxChange}/>
            <Text
                display={showInputText ? "none" : "block"}
                margin="10px"
                textDecoration={isCompleted ? "line-through" : "none"}
            >
                {name}
            </Text>            <input type="text" value={name} onChange={handleTaskChange} hidden={!showInputText}/>
            <Button onClick={handleSaveModifyTask} display={showInputText ? "block" : "none"} fontWeight="bold" textDecoration="none" size="sm" colorScheme='green' variant='outline'>
                Save Modify Task
            </Button>
            <Button onClick={handleClickModifyTask} display={showInputText ? "none" : "block"} fontWeight="bold" textDecoration="none" size="sm" colorScheme='green' variant='outline'>
                Modify Task
            </Button>
            <Button onClick={handleClickDeleteTask} display={showInputText ? "none" : "block"} fontWeight="bold" textDecoration="none" size="sm" colorScheme='green' variant='outline'>
                Delete Task
            </Button>
        </div>
    )
}
