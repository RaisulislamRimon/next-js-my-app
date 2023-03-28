import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <Link href="/blogs">/blogs</Link> <br /> <br />
      <Link href="/blogs/100">/blogs/100</Link> <br /> <br />
      <Image src="/flowers.jpg" width={120} height={120}></Image>
    </div>
  );
}
