import { useRouter } from 'next/router';

export default function blogId() {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <h1>Dynamic Blog page created </h1>
      <p>Page No: : {blogId}</p>
    </div>
  );
}
