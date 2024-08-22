import PageLayout from '../../Components/PageLayout/PageLayout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs page",
    description: "Calls an API to get Blog Posts on the page",
  };
  

const Blog = () => {
    return (
        <PageLayout>
            <h1>Blogs Page</h1>
        </PageLayout>
    )
}

export default Blog;