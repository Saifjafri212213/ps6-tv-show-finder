import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from './components/Home';
import Shows from './components/Shows';
import ShowDetails from './components/ShowDetails';

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/'>Go to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link> {" | "}
        <Link to='/shows'>Shows</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<Shows />} />
        <Route
          path="/shows/:id"
          element={<ShowDetails />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
