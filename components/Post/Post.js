import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <div className="border rounded-lg p-10 m-5 hover:text-red-600 hover:cursor-pointer">
        <h1 className="text-xl underline text-gray">Post</h1>
        <Link href={`/posts/${post.id}`}>
          <p className="underline text-orange-300">Post Id: {post.id}</p>
          <p className="hover:text-orange-200">Post title: {post.title}</p>
        </Link>
      </div>
    </div>
  );
}
