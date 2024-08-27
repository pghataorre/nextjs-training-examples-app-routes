"use client"
import PageLayout from '../../Components/PageLayout/PageLayout';
import UsersList from '../../Components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { IUser } from './types';

const getUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users');
    const response = await res.json();
    return response.users;
}


const Users = () => {
    const [usersCollection, setUsersCollection] = useState<IUser[]>([]);

    useEffect(() => {
        (async () => {
            const UsersList = await getUsers();
            setUsersCollection(UsersList);
        })();
    }, []);

    return (
        <PageLayout>
            <h1>List Page calling from an API route</h1>
            <p>A list of users from an api call /api/users</p>
            {
                usersCollection?.length > 0 
                ? (<UsersList users={usersCollection} />)
                : (<h3>Loading ...</h3>)
            }
        </PageLayout>
    )
}

export default Users;
