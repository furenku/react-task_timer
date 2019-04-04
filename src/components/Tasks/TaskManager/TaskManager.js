import React from 'react';

import TaskManagerView from './TaskManagerView';


class TaskManager extends React.Component {

    state = {
        timeEllapsed: 0
    }

    taskStart = () => {

        console.log("Task start!");

        setInterval( () => {

            let timeEllapsed = this.state.timeEllapsed

            timeEllapsed++;
            
            const minutes = Math.floor(timeEllapsed / 60);
            const seconds = timeEllapsed % 60;

            console.log("time:", minutes + ":" + seconds.toString().padStart(2,"0") )
            
            this.setState({timeEllapsed})

        }, 1000)
    }

    render() {
        const props = {
            handleTaskStart: this.taskStart
        }
        return (
            <TaskManagerView {...props}/>
        )
        
    }

}

export default TaskManager;