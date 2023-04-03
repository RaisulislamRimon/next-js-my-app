import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
      <Link href="/posts">
        <button className="btn btn-warning">All Posts</button>
      </Link>
      <br />
      <Link href="/comments">
        <button className="btn btn-secondary">All Comments</button>
      </Link>
    </div>
  );
}
