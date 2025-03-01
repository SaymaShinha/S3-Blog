import "./Home.css";

function Home() {
  return (
    <div>
      <div className="row col-lg-12 home-start">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p>
            My world through my eyes, mind, understanding. Which makes my life
            exciting, happy, and smiley. It gives hope, an optimistic view even
            at the extreme point of life. You never have to feel alone. I am
            even smiling being alone myself.
          </p>
          <a href="blog">
            <button className="btn btn-info">Let's begin the journey</button>
          </a>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img className="home-img" src="./images/home.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
