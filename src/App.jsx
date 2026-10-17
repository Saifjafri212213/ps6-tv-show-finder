import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './component/Home'
import Show from './component/Show'
import ShowDetails from './component/ShowDetails';

function NotFound(){
  return (
    <div>
      <h1>404- Page Not found</h1>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shows'>Shows</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shows' element={<Show/>} />
        <Route path='/shows/:id' element={<ShowDetails/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
