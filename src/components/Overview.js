function Overview(props){
    const {tasks, deleteTask} = props;
    return(
        <div>
            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.name} <button onClick={() => deleteTask(task.id)}>delete</button></li>
                })}
            </ul>
        </div>
    )
}

export default Overview;