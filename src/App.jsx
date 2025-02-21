import "./App.css";
import "./pages/Blog.css";
import "./scss/styles.scss";
import "./static/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog.jsx";
import Layout from "./pages/Layout.jsx";
import Quote from "./pages/Quote.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import SinglePost from "./pages/SinglePost.jsx";

function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Blog />} />
            <Route path="blog" element={<Blog />} />
            <Route path="singlepost" element={<SinglePost />} />
            <Route path="quote" element={<Quote />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
