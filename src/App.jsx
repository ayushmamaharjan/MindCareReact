import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//COMPONENTS
import MainLayout from './Layout/MainLayout';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import WriteStory from './components/WriteStory';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with MainLayout (Navbar and Footer visible) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage/>
            </MainLayout>
          }
        />

         <Route 
           path="/writestory" 
           element={
               <MainLayout>
                <WriteStory/>
               </MainLayout>
              } 
          />
         
      </Routes>
    </Router>
  );
}

export default App;




