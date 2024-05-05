import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";
import PopularPage from "./pages/PopularPage/PopularPage";
import AllPost from "./pages/AllPost/AllPost";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ConnectionStatus from "./components/ConnectionStatus/ConnectionStatus";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop />
            <ConnectionStatus />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="/all-post" element={<AllPost />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
