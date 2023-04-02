import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <div className="border rounded-lg p-10 m-5 hover:text-red-600 hover:cursor-pointer">
          <p className="underline text-orange-300">Post Id: {post.id}</p>
          <p className="hover:text-orange-200">Post title: {post.title}</p>
          <button className="btn btn-outline btn-accent mt-3">
            See details
          </button>
        </div>
      </Link>
    </div>
  );
}
