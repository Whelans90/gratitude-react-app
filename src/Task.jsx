import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Task = ({ task }) => {
    return (
        <div>
            <Col>
            <Card bg={task.complete ? "success" : "primary"} text= 'white' style={{ width: '18rem', height: '18rem' }} >
                <Card.Body>
                    <Card.Title>{task.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>{task.description}</Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
            </Card>
            </Col>
        </div>
    );
}
export default Task;