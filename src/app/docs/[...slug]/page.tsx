import PageLayout from '../../../Components/PageLayout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "DOC Example of a catch all route",
    description: "DOC Example of a catch all route",
  };


interface ICatchAllPage {
    params : {
        slug: string[];
    }
}

const CatchAllPage = ({params}: ICatchAllPage) => {

    return (
        <PageLayout>
            <h1>Docs Example of a CATCH ALL route path</h1>
            <p>In the URL address bar type anything after http://localhost:3001/docs/ and use / to sub split route sections and the paths will be displayed below </p>
            
            <h2>{params?.slug.join('/')}</h2>

        </PageLayout>
    )
}

export default CatchAllPage;