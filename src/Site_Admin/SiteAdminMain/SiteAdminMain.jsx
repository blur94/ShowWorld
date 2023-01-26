import React, { useState, useCallback } from 'react';
import Events from './SiteAdminMainComponents/Events/Events';
import Movies from './SiteAdminMainComponents/Movies/Movies';
import Theater from './SiteAdminMainComponents/Theater/Theater';
import Users from './SiteAdminMainComponents/Users/Users';

export default function SiteAdminMain({ mainView, setMainView }) {
    // const [mainView, setMainView] = useState('users');

    const showMainView = useCallback(() => {
        switch (mainView) {
            case 'users':
                return <Users />;

            case 'events':
                return (
                    <Events />
                );

            case 'movies':
                return (
                    <Movies />
                );

            case 'theater':
                return (
                    <Theater />
                );


            default:
                setMainView('users');
                break;
        }
    }, [mainView]);
    return <div>{showMainView()}</div>;
}

// const Users = () => {
//     return <div>Users</div>;
// };

// const Events = () => {
//     return <div>Events</div>;
// };
