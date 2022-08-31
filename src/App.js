import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from './components/Layout';
import Research from './Pages/research';
import Blog from './Pages/blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
