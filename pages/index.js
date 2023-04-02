import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Post from './posts/post';

export async function getStaticProps() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=40'
  );
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
      <Head>
        <title>Next js App</title>
      </Head>
      <h1 className="text-xl font-bold underline">Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <Link href="/blogs">/blogs</Link> <br /> <br />
      <Link href="/blogs/100">/blogs/100</Link> <br /> <br />
      <Image
        src="https://i.ibb.co/42gC30B/flowers.webp"
        width={120}
        height={120}
      ></Image>
      {/* <Image src="/flowers.jpg" width={120} height={120}></Image> */}
      <button className="btn btn-warning">Warning</button>
      <p>
        The number of posts:
        {posts.length}
      </p>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
