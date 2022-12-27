import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../../templates/Gilead/Table';
import Button from '../../../../templates/Gilead/Button';
import './Events.css';
import Modal from '../../../../templates/Gilead/Modal';
import AddEventModal from './AddEventModal';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            width: '30%'
        },
        {
            name: 'Completed',
            selector: row => <span>{row.completed ? 'True' : 'False'}</span>,
            sortable: true,
        },
        {
            name: 'Posted By',
            selector: row => row.userId,
            sortable: true,
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
        const getEvents = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    setEvents(response.data);
                    console.log(events);
                });
        };
        getEvents();
    }, []);

    return (
        <>
            <div className='gil-add-event'>
            <AddEventModal />
            </div>
            <Table data={events} columns={columns} title='Events' />
        </>
    );
}
