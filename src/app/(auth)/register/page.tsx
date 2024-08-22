import PageLayout from '../../../Components/PageLayout/PageLayout';
import Link from 'next/link';

const ForgottenPassword = () => {
    return (
      <PageLayout>
        <h1>Examples of a Route group - REGISTER</h1>
        <p>All routes are stored under a folder (auth) - THE BRACKETS tell NextJs to ignore this folder as a pathName and use the sub folders as the route.</p>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/forgottenpassword">Forgotten password</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </PageLayout>
    )
}

export default ForgottenPassword;