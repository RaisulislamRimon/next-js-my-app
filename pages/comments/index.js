import Head from "next/head";
import Link from "next/link";

export default function comments({ data }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>Comments</title>
      </Head>

      <Link href="/">
        <button className="btn btn-warning">Back to Home</button>
      </Link>

      <h1 className="text-3xl underline text-center">Comments</h1>
      <div>
        {data.map((comment) => (
          <div key={comment.id} className="border my-10 mx-10 rounded p-5">
            <p>{comment.id}</p>
            <h1>{comment.body}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await res.json();

  // console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
