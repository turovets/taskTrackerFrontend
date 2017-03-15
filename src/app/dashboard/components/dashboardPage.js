import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
   this.props.fetchTasksIfNeeded();
  }

  render(){
    return (
      <div>
        <h2>Tasks</h2>

          {
            this.props.dashboard.tasks.length ?
            <ul>
							{this.props.dashboard.tasks.map(task => (
                <li key={task.id}>{task.name}</li>
							))}
            </ul>
            :
            <h4>No tasks !</h4>
          }
       <Link to={`/task`}>add task</Link>
      </div>
    )
  }
}

export default Dashboard;