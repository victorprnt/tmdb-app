import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Movie from '../pages/Movie'
// import Series from '../pages/Series';
// import Favorites from '../pages/Favorites';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:movieId" element={<Movie />} />
  </Routes>
)

export default AppRoutes
