import Link from 'next/link';

export default function blog() {
  return (
    <div>
      <h1>This is blog main index page under blog folder</h1>
      <p>This is blog index page under blog folder</p>
      <Link href="/">Go to Home</Link>
      <br />
      <br />
      <Link href="/blogs">Go to /blogs</Link>
      <br />
      <br />
      <Link href="/blogs/blog1">Go to /blogs/blog1</Link>
    </div>
  );
}
