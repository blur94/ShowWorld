import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Table from '../../../../templates/Gilead/Table';
import Button from '../../../../templates/Gilead/Button';
import AddEventModal from './AddEventModal';
import './Events.css';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleEdit = () => {
        console.log('Edit Button');
    };

    const handleDelete = () => {
        console.log('Delete Button');
    };

    const url = 'http://localhost:5000/events';

    const getEvents = async () => {
        await axios.get(url)
            .then(response => {
                setEvents(response.data);
            });
        };

    useEffect(() => {
            getEvents();
        }, []);

        console.log(events);

    const columns = [
        {
            name: 'S/N',
            selector: (row, index) => <div className='first_col'>{index + 1}</div>,
            sortable: true,
            width: '4.5rem',
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => <span title={row.description}>{row.description}</span>,
            sortable: true,
            width: '20rem'
        },
        {
            name: 'Rating ',
            selector: row => `${row.rating} / 10`,
            sortable: true,
        },
        {
            name: 'Duration',
            selector: row => `${row.duration} mins`,
            sortable: true,
            width: '15rem'
        },
        {
            name: 'Created On',
            selector: row => `${dayjs(row.createdAt).format('DD/MM/YYYY')}`,
            sortable: true,
            width: '15rem'
        },
        {
            name: 'Action',
            selector: row => <div className='action_container'>
                <Button title='Edit' className='action_button' handleClick={handleEdit} />
                <Button title='Delete' className='action_button' handleClick={handleDelete} />
            </div>,
            width: '12rem'
        },
    ];


    return (
        <div>
        <div className='gil-add-event'>
                <AddEventModal getEvents={getEvents} />
            </div>
            <Table data={events} columns={columns} />
        </div>
    );
}
