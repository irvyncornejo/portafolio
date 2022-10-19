import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfessionalPortfolio  from './components/ProfessionalPortfolio'
import Projects from './components/Projects/Projects';
const App = () => {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProfessionalPortfolio />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<>NOT FOUND</>} />
        </Routes>
      </BrowserRouter>
    </div>
    </> 
  )
}

export default App;
