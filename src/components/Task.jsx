//Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)

export function Task(props){
    const { name } = props;
    return(
        <li>
            <p>{name}</p>
        </li>
    )
}
