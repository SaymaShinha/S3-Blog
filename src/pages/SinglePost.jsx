import { useParams } from "react-router-dom";
import data from "../data.json";

const SinglePost = () => {
  const { id } = useParams();
  const post = data.find((item) => item.id === Number(id)); // Convert id to number

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <i>{post.category}</i>
      <p>{post.published_date}</p>
      <img
        src={`/src/static/img/${post.image}`}
        alt={post.title}
        style={{ height: "8rem" }}
      />
      <h1>{post.title}</h1>
      <pre
        style={{
          padding: "2rem 2rem 4rem 2rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {post.content}
      </pre>
    </div>
  );
};
export default SinglePost;
