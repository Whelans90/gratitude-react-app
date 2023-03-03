import React from 'react';
import {Container, Table} from 'react-bootstrap';

const EmployeeTable = ({ employees }) => {
    return (
        <Container>
            <Table className="table-striped thead-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        return (
                            <tr>
                                <th scope="row">{employee.id}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default EmployeeTable;
