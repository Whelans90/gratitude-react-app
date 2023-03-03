import React from 'react';
import Task from './Task';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

const ToDoList = ({ taskList }) => {
    return (
        <div>
            <Row xs={1} md={2} lg={3}>
            {taskList.map(task => {
                return (
                    <Task task={task} />
                )
            })}
            </Row>
        </div>
    );
}

export default ToDoList;