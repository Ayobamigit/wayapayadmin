import React, {Suspense} from 'react';
import './App.scss';
import {Route, Routes, Navigate} from 'react-router-dom';
import Terminals from './pages/Terminals/Terminals';

function App() {
  return (
    <Suspense fallback="f">
    <Routes>    

    {/* Manage Pos */}
      <Route path='/manage-pos' exact element={<Terminals />} />

    </Routes>
  </Suspense>
  );
}

export default App;
