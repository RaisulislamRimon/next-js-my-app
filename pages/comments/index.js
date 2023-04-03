export default function comments({ data }) {
  console.log(data);
  return (
    <div>
      <h1>Comments</h1>
      {data.map((comment) => (
        <div key={comment.id}>
          <p>{comment.id}</p>
          <h1>{comment.body}</h1>
        </div>
      ))}
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
