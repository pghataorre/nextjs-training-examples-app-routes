"use client"
import { SyntheticEvent, useState, useRef } from 'react';
import PageLayout from '../../../Components/PageLayout/PageLayout';
import styles from '../users.module.css';
import Loader from '@/Components/Loader/Loader';

interface IPostUserResponse {
    id?: string;
    name: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
}

const AddUser = () => {
    const [userPost, setUserPost] = useState<IPostUserResponse | null>(null);
    const [isPosting, setIsPosting] = useState<boolean>(false);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const userNameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const addUsers = async (event: SyntheticEvent) => {
        event.preventDefault();
        setIsPosting(true);

        const userDetailEntries: IPostUserResponse = {
            name: nameRef?.current?.value || null,
            email: emailRef?.current?.value  || null,
            username: userNameRef?.current?.value  || null,
            password: passwordRef?.current?.value || null
        };
    
        try {
            const res = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                body: JSON.stringify(userDetailEntries),
            });
    
            const response = await res.json();
            setUserPost(response);

        } catch (e) {
            console.log(' error -------- ', e)
            
        } finally {
            setIsPosting(false);
        }
    }

    return (
        <PageLayout>
            <h1>Add a user</h1>
            <p>fill in the form below to add a dummy user</p>
            { isPosting && (<div><Loader loadingText="Submitting form ...."/></div>) }
            <div className={styles['user-form']}>
                <div>
                    <form method="post" id="userForm" onSubmit={(e) => addUsers(e)} >
                        <label htmlFor="name">
                            <span>Name:</span>
                            <input type="text" name="name" id="name" placeholder="Add name here" ref={nameRef}/>
                        </label>
                        <label htmlFor="email">
                            <span>Email:</span>
                            <input type="email" name="email" id="email" placeholder="Add an Email" ref={emailRef}/>
                        </label>
                        <label htmlFor="username">
                            <span>Username:</span>
                            <input type="text" name="username" id="username" placeholder="Add a username" ref={userNameRef}/>
                        </label>
                        <label htmlFor="password">
                            <span>Password:</span>
                            <input type="password" name="password" id="password" placeholder="Add a password" ref={passwordRef}/>
                        </label>
                        <label htmlFor="submitform">
                            <button type="submit" name="submitform" id="submitform">Submit Details</button>
                        </label>    
                    </form>
                </div>
                {(userPost?.name) && (
                    <div className={styles['user-posted-details']}>
                        <h3>User Details that were just posted</h3>
                        <p>The results below have been POSTED via an api /users and the results returned via the post with an ID added and the password blanked</p>
                        <ul>
                            <li>
                                <strong>Id: </strong>{userPost.id}
                            </li>
                            <li>
                                <strong>Name: </strong>{userPost.name}
                            </li>
                            <li>
                                <strong>Username: </strong>{userPost.username}
                            </li>
                            <li>
                                <strong>Email: </strong>{userPost.email}
                            </li>
                            <li>
                                <strong>password: </strong>{userPost.password}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </PageLayout>
    )
}

export default AddUser;
