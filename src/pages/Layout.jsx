import "./Layout.css";

function Layout() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          src="./images/pexels-photo-6373293.webp"
          style={{
            marginTop: "0rem",
            width: "6.5rem",
            height: "4rem",
            alignContent: "center",
          }}
        />
      </div>
      <div className="container" style={{ marginTop: "1rem" }}>
        <div className="col-lg-12 row">
          <div
            className="col-lg-4"
            style={{
              height: "0.02rem",
              backgroundColor: "black",
            }}
          ></div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <h5
              style={{
                letterSpacing: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              <a href="/">Glance Of Life</a>
            </h5>
            <i>A simple introduction of me to the world.</i>
          </div>
          <div
            className="col-lg-4"
            style={{ height: "0.02rem", backgroundColor: "black" }}
          ></div>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Layout;
