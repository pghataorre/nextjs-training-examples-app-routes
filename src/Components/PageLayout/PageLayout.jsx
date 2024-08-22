import styles from '../../app/page.module.css';
import Nav from '../Nav/Nav';

const PageLayout = ({children}) => {
    return (
        <main className={styles.main}>
          <Nav />
          {children}
        </main>
    )
}

export default PageLayout;
