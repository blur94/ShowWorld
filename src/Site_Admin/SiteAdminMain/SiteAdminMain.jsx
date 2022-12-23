import React, { useState, useCallback } from 'react';
import Users from './SiteAdminMainComponents/Users';

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

const Events = () => {
    return <div>Events</div>;
};
