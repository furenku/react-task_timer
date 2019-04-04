import React from 'react';

import TaskForm from '../TaskForm/TaskForm';

const TaskManagerView = (props) => {

    const {
        handleTaskStart
    } = { ... props }


    return (
        <>
            <TaskForm/>
            <button onClick={ () => handleTaskStart()}>
                Start
            </button>
        </>
    )

}

export default TaskManagerView;