import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BinarySearch from "./components/binary-search/index.component";
import Home from "./components/Pages/Home"


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/algo">
          Story
        </Link>
        <Link to="/algo2">
          Algo
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algo" element={<BinarySearch />} />
      </Routes>
    </Router>
  );
}

export default App;
