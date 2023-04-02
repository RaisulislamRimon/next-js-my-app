import Head from 'next/head';
import Post from '../../components/Post/Post';

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>

      <p>
        The number of posts:
        {posts.length}
      </p>
      <h2>Post component</h2>
      <h1 className="text-xl underline text-gray">Post</h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=40'
  );
  const posts = await res.json();

  // console.log(posts.length);

  return {
    props: {
      posts,
    },
  };
}
