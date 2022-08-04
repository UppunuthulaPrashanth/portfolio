import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Fibbonacci from './views/Fibbonacci';
import Profile from './views/Profile';
import Callbackfunction from './views/Callbackfunction';
import Stringreverse from './views/Stringreverse';
import Sortingstring from './views/Sortingstring';
import Sortingnumber from './views/Sortingnumber';
import Quadraticformula from './views/Quadraticformula';
import QrCode from './views/QrCode';
import Calculator from './views/Calculator';

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Profile/>} />
            <Route exact path="fibbonacci" element={<Fibbonacci/>} />
            <Route exact path="callback-function" element={<Callbackfunction/>} />
            <Route exact path="string-reverse" element={<Stringreverse/>} />
            <Route exact path="sorting-strings" element={<Sortingstring/>} />
            <Route exact path="sorting-numbers" element={<Sortingnumber/>} />
            <Route exact path="quadratic-formula" element={<Quadraticformula/>}/>
            <Route exact path="qrcode" element={<QrCode/>}/>
            <Route exact path="calculator" element={<Calculator/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
