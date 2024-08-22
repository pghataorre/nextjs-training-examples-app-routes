import styles from './nav.module.css';
import Link from "next/link";
import HamBurgerIcon from '../../Components/Icons/HamburgerIcon/HamBurgerIcon'

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <ul>
        <li>
          <HamBurgerIcon />
          <ul>
        <li>
          <Link href="/" className={styles['nav-link']}>HOME</Link>
        </li>
        <li>
          <Link href="/products" className={styles['nav-link']}>PRODUCTS</Link>
        </li>
        <li>
          <Link href="/docs" className={styles['nav-link']}>DOCS CATCH ALL EXAMPLE</Link>
        </li>
        <li>
          <Link href="/users" className={styles['nav-link']}>USERS LIST - FROM API USING getStaticProps()</Link>
        </li>
        <li>
          <Link href="/postblogs" className={styles['nav-link']}>BLOGS getStaticProps()</Link>
        </li>
        <li>
          <Link href="/privatefolders" className={styles['nav-link']}>PRIVATE FOLDERS</Link>
        </li>
        <li>
          <Link href="/login" className={styles['nav-link']}>ROUTE GROUPS</Link>
        </li>
        <li>
          <Link href="/photos" className={styles['nav-link']}>PHOTOS</Link>
        </li>
        <li>
          <Link href="/contextuser" className={styles['nav-link']}>CONTEXT EXAMPLE</Link>
        </li>
      </ul>
        </li>
      </ul>
     

    </nav>
  )
}

export default Nav;