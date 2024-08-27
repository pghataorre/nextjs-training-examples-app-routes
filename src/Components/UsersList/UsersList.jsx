import Link from 'next/link'; 
import styles from './userList.module.css'
 
const UsersList = ({users}) => {
  return (
    <ul className={styles['user-list']}>
        {users?.map((user) => (
          <>
            <Link href={`/users/${user.id}`}>
              <li key={user.id}>
                  {user.name}
              </li>
            </Link>
          </>
        ))}
    </ul>
  )
}

export default UsersList;
