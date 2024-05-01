import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";
import PopularPage from "./pages/PopularPage/PopularPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/popular" element={<PopularPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
