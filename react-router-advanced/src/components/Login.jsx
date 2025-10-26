import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    // In a real app, you'd have a form and validation
    login({ name: 'Test User' });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>You must log in to view the page at {from}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
