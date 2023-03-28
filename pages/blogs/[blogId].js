import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function blogId() {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <Head>
        <title>Dynamic blog page</title>
      </Head>

      <h1>Dynamic Blog page created </h1>
      <p>Page No: : {blogId}</p>
      <Link href="/">Go to Home</Link>
      <br />
      <br />
      <Link href="/blogs">Go to /blogs</Link>
    </div>
  );
}
