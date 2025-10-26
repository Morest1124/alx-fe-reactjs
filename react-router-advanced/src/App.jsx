import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './pages/Layout';
// 1. Add new import for BlogPost component
import BlogPost from './components/BlogPost'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} /> 
        
            
            {/* Dynamic Routing: Route for a list of posts */}
            <Route path="/posts" element={<Posts />} />

            {/* 2. Add the dynamic route for a single blog post */}
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Protected and Nested Routing */}
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;