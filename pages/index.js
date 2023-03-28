import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <Link href="/blogs">/blogs</Link> <br /> <br />
      <Link href="/blogs/100">/blogs/100</Link>
    </div>
  );
}
