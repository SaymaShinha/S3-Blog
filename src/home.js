import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", summary: "This is the first blog post." },
  {
    id: 2,
    title: "Second Blog Post",
    summary: "This is the second blog post.",
  },
];

function HomePage() {
  return (
    <div>
      <h1>My Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
