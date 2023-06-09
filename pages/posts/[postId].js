import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostDetails({ post }) {
  const router = useRouter();
  const handleBack = () => {
    router.push('/posts');
  };
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Link href="/posts" className="btn btn-accent">
        Back to posts
      </Link>
      <br />
      <br />
      <h1>Post No: {post.id}</h1>
      <h2 className="text-white">{post.title}</h2>
      <p className="text-orange-400">{post.body}</p>
      <button onClick={handleBack} className="btn btn-warning">
        Back to posts
      </button>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  // console.log(posts.length);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // console.log(posts);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
