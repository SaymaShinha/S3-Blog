import data from "../data.json";
import "./Blog.css";

const Post = () => {
  const posts = data.map((item) => (
    <div className="post" key={item.id}>
      <h6>{item.published_date}</h6>
      <h4>{item.title}</h4>
      <p className="content">{item.content}</p>
      <a href={`post/${item.id}`} style={{ float: "right" }}>
        read more
      </a>
    </div>
  ));

  return <div className="posts">{posts}</div>;
};

const Blog = () => {
  return (
    <>
      <h3>Blog</h3>
      <div className="container">
        <div className="row col-lg-12">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Post />
          </div>
          <div className="card col-lg-3 col-md-12 col-sm-12">
            <div>
              <p>
                Life shouldn't have to be happy, and smiley all the time. We
                have so many feelings, and emotions. If we can embrace them all,
                and accept those in the right ways, life can be so much more
                beautiful.
                <p style={{ float: "right" }}>— Sayma Sultana Shinha</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
