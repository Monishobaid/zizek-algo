import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BinarySearch from "./components/binary-search/index.component";

function Route1() {
  return (
    <div>
      <h2>hello world 1</h2>
    </div>
  );
}

function Route2() {
  return (
    <div>
      <h2>hello world 2</h2>
    </div>
  );
}

function Route3() {
  return (
    <div>
      <h2>hello world 2</h2>
    </div>
  );
}

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
        <Route path="/" element={<BinarySearch />} />
        <Route path="/algo" element={<Route2 />} />
        <Route path="/algo2" element={<Route3 />} />
      </Routes>
    </Router>
  );
}

export default App;
