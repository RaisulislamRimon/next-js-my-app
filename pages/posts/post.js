import Head from 'next/head';
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>

      <div className="border rounded-lg p-10 m-5 hover:text-red-600 hover:cursor-pointer">
        <h1 className="text-xl underline text-gray">Post</h1>
        <Link href={`/posts/${post.id}`}>
          <p>Post Id: {post.id}</p>
        </Link>
      </div>
    </div>
  );
}
