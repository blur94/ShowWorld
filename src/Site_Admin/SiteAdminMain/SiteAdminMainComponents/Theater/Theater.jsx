import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../../templates/Gilead/Table';
import Button from '../../../../templates/Gilead/Button';
import './Theater.css';
import AddTheaterAdminModal from './AddTheaterAdminModal';
import AddTheaterModal from './AddTheaterModal';

export default function Movies() {
    const [theaterAdmin, setTheaterAdmin] = useState([]);
    const [theater, setTheater] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleEdit = () => {
        console.log('Edit Button');
    };

    const handleDelete = () => {
        console.log('Delete Button');
    };

    const theaterAdminColumns = [
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

    const theaterColumns = [
        {
            name: 'S/N',
            selector: row => row.id,
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
        const getTheaterAdmin = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setTheaterAdmin(response.data);
                    console.log(theaterAdmin);
                });
        };
        const getTheater = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    setTheater(response.data);
                    console.log(theater);
                });
        };
        getTheaterAdmin();
        getTheater();
    }, []);

    return (
        <>
            <div className='gil-add-theater'>
                <AddTheaterAdminModal />
                <AddTheaterModal />
            </div>
            <Table data={theaterAdmin} columns={theaterAdminColumns} title='Theater Admin Management' />
            <Table data={theaterAdmin} columns={theaterAdminColumns} title='Theater Management' />
        </>
    );
}
