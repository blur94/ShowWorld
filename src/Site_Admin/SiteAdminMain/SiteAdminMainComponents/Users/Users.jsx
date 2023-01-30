import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../../templates/Gilead/Table';
import Button from '../../../../templates/Gilead/Button';
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log('env: ', process.env.REACT_APP_FB_MESSAGING_SENDER_ID)
    const handleEdit = () => {
        console.log('Edit Button');
    };

    const handleDelete = () => {
        console.log('Delete Button');
    };

    const columns = [
        {
            name: 'S/N',
            selector: row => <div className='first_col'>{row.id}</div>,
            sortable: true,
            width: '4.5rem',
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Website',
            selector: row => row.website,
            sortable: true,
            width: '7rem'
        },
        {
            name: 'Action',
            selector: row => <div className='action_container'>
                <Button title='Edit' className='action_button' handleClick={handleEdit} />
                <Button title='Delete' className='action_button' handleClick={handleDelete} />
            </div>,
        },
    ];

    useEffect(() => {
        const getUsers = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setUsers(response.data);
                    console.log(users);
                });
        };
        getUsers();
    }, []);

    return (
        <>
            <Table data={users} columns={columns} />
        </>
    );
}
