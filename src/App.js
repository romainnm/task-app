import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: {
        name: '',
        id: uniqid(),
      }
    }
  }
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        name: '',
        id: uniqid(),
      }
    });

  }

  render() {
    const {tasks, task} = this.state;
    return(
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input 
            type="text"
            value={task.name} 
            placeholder="Add new task"
            onChange={(e)=>{this.setState({task:{name: e.target.value, id: task.id}})}}  
          />
          <input type="submit" value="Add"/>
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  }
}

export default App;