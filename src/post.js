import React from "react";
import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the full content of the first post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the full content of the second post.",
  },
];

function PostPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
