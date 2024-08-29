import { IUser } from "@/app/users/types";
import styles from './userDetails.module.css'

interface IUserProps {
    userDetails: IUser | undefined | null;
}

const UserDetails =  ({userDetails}: IUserProps) => {
  if (!userDetails) return (<></>)

  const { name, username , email, phone, website, address, company} = userDetails;

  return (
    <div >
      <ul className={styles['user-details']}>
        <li>
          <h3><strong>Name: </strong>{name}</h3>
        </li>
        <li>
          <strong>Username: </strong>{username}
        </li>
        <li>
          <strong>Email: </strong>{email}
        </li>
        <li>
          <strong>Phone: </strong>{phone}
        </li>
        <li>
          <strong>website: </strong>{website}
        </li>
        <li>
          <strong>Address: </strong>
          <p>{address.street}</p>
          <p>{address.suite}</p>
          <p>{address.city}</p>
          <p>{address.zipcode}</p>
        </li>
        <li>
          <strong>Company: </strong>
          <p>{company.name}</p>
          <p>{company.catchPhrase}</p>
        </li>
      </ul>
    </div>
  )
}
  
  export default UserDetails;
  