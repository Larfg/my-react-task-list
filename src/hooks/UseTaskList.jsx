function useTaskList(list, setList) {

    const handleAddTask = (newTask,TaskDesc) => {
        if (!list.find(task => task.name === newTask)){
            setList([...list, {name:newTask,complete:false,description:TaskDesc}])
        }
    };

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
    };

    return { handleAddTask, handleDeleteTask, handleModifyTask };
}

export default useTaskList;
