import React, {useState, useEffect} from "react";

export function getUsers() {

    const [users, setUsers] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/api/users")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error("Error Fetching User Table", error);
                setError(error);
            })
    }, []);

    return users;
}


/* useEffect(() => {
    fetch("http://localhost:8080/api/users")
    .then(response => response.json())
    .then(data =>  setusers(data))
  
  
}, []); */