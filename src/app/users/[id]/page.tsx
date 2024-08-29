"use client"
import PageLayout from '../../../Components/PageLayout/PageLayout';
import { useEffect, useState } from 'react';
import { IUser } from '../types';
import Loader from '../../../Components/Loader/Loader';
import UserDetails from '@/Components/UserDetails/UserDetails';
import Link from 'next/link';
import styles from '../..//page.module.css';

const getUserDetail = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const response = await res.json();
    return response.users;

  } catch (e) {
    return {error: e}
  }
}

interface IUserIdProps {
  params: {
    id: string;
  };
}


const UserFullDetails = ({params}: IUserIdProps) => {  
  const [userDetail, setUserDetail] = useState<IUser | undefined | null>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await getUserDetail(params.id);
      if (!response?.error) {
        setUserDetail(response);
        setLoading(false);
      }
    })();
  }, []);

  return (
      <PageLayout>
          <h1>User Detail Page</h1>
          <p>Try and change the parameter id to get different user details</p>
          {loading
          ? (<Loader />)
          : (<><UserDetails userDetails={userDetail} /></>)
          }
          <p><Link href='/users' className={styles['back-button']}>Go back to users</Link></p>
      </PageLayout>
  )
}

export default UserFullDetails;
