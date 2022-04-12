import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => setUser(res.data));

    },[]);

    return (
        <>


            <table className='ui celled table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>)
                    }
                </tbody>

            </table>


        </>
    )
}
export default Users;