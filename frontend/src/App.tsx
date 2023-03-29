import React from 'react';
import './App.css';
import Home from './HomePage';
import MovieList from './MovieCollection';
import Podcasts from './PodcastPage';

function App() {
  return (
    <div>
      <Home saying="Joel Hilton" />
      <MovieList />
      <Podcasts />
    </div>
  );
}

export default App;
