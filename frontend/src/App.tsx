import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/HomePage';
import MovieList from './pages/MovieCollection';
import Podcasts from './pages/PodcastPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // all the links to navigate the page
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home saying="Joel Hilton" />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="podcasts" element={<Podcasts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
