import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import HomePage from "./home";
import PostPage from "./post";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
      </Routes>
    </Router>
  );
}

export default App;
