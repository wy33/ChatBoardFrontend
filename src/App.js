import React from 'react';
import NavBar from './components/NavBar.js';
import Board from './pages/Board.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Board/>} />
          {/* Other routes if there are any */}
        </Routes>
      </div>
    </>
  )
}

export default App;
