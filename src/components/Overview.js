function Overview(props){
    const {tasks} = props;
    return(
        <div>
            <ul>
                {tasks.map(task => {
                    return <li key={task.id}>{task.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Overview;