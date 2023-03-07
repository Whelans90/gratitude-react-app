import React from 'react';
import {Container, Table} from 'react-bootstrap';

const UsersTable = ({ users }) => {
    return (
        <Container>
            <Table className="table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default UsersTable;
