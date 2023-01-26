import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../../../templates/Gilead/Table';
import Button from '../../../../templates/Gilead/Button';
import './Movies.css';
import AddMoviesModal from './AddMoviesModal';

export default function Movies() {
    const [movies, setMovies] = useState([]);
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
            selector: row => row.id,
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
            name: 'Links',
            selector: row => <a href={row.url}>Trailer</a>,
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
        const getMovies = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(response => {
                    setMovies(response.data);
                    console.log(movies);
                });
        };
        getMovies();
    }, []);

    return (
        <>
            <div className='gil-add-event'>
                <AddMoviesModal />
            </div>
            <Table data={movies} columns={columns} title='Movie Management' />
        </>
    );
}
