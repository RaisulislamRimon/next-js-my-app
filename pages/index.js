import Link from 'next/link';
import Image from 'next/image';
import Post from './posts/posts';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1 className="text-xl font-bold underline">Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <Link href="/blogs">/blogs</Link> <br /> <br />
      <Link href="/blogs/100">/blogs/100</Link> <br /> <br />
      <Image src="/flowers.jpg" width={120} height={120}></Image>
      <button className="btn btn-warning">Warning</button>
      {posts.length}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
