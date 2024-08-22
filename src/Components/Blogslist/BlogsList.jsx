import Link from 'next/link';

const BlogList = ({blogPosts}) => {
  return (
    <div>
      <ul>
        {blogPosts?.map((post) => (
          <li key={post.id}>
            <Link href={`postblogs/${post.id}`}>
              <h4>{post.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList;
