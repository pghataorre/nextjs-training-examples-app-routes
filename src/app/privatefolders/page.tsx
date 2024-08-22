import PageLayout from '../../Components/PageLayout/PageLayout';

const PrivateFolders = () => {
    return (
      <PageLayout>
        <h1>Private Folders</h1>
        <p>Any folder that start with `_someFolder` the `_` infront of the filename makes it private</p>
        <p>It cant be accessed, for our example theres a page in _private in the code - try to access this and the app will show the 404 page</p>
      </PageLayout>
    )
}
export default PrivateFolders;