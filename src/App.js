import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostsPage from './components/PostsPage';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pupanov 0432-06 React</h1>
        <Navigation />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/" element={<Navigate to="/posts" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
