
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Quiz from "./pages/Quiz/Quiz";
import Category from "./pages/Category/Category";


function App () {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
