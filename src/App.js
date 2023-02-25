<<<<<<< HEAD
import './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar';
import StatsCard from './components/web_stats/StatsCard';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Quiz from "./pages/Quiz/Quiz";
import Category from "./pages/Category/Category";
>>>>>>> 98c7ece3c41bb5e472cd099d0a8d833ed29f2dcc

function App () {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <StatsCard />
=======
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
>>>>>>> 98c7ece3c41bb5e472cd099d0a8d833ed29f2dcc
    </div>
  );
}

export default App;
