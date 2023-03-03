import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Home() {
    return (
        <div>
        <h1>HOME</h1>
        <Container>
            <Card className='mt-4'>
                <Card.Body>
                    <h2>Home Page</h2>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default Home;