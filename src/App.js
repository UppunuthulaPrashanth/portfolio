import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Dashboard from './views/Dashboard';
import Fibbonacci from './views/Fibbonacci';
import Profile from './views/Profile';
import Callbackfunction from './views/Callbackfunction';
import Stringreverse from './views/Stringreverse';
import Sortingstring from './views/Sortingstring';

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="profile" element={<Profile/>} />
            <Route exact path="fibbonacci" element={<Fibbonacci/>} />
            <Route exact path="callback-function" element={<Callbackfunction/>} />
            <Route exact path="string-reverse" element={<Stringreverse/>} />
            <Route exact path="sorting-string" element={<Sortingstring/>} />

          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
