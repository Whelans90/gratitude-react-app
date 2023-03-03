import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Tasks() {
    return (
        <Container>
            <Card className='mt-4'>
                <Card.Body>
                    <h2>Task List</h2>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Tasks;