export default function Post({ post }) {
  return (
    <div>
      <h1 className="text-xl underline">Post</h1>
      <p>Post Id: {post.id}</p>
    </div>
  );
}
