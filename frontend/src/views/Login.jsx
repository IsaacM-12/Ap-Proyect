import React, { useState } from 'react';
import { login } from '../services/authService';
import { NotificationContainer } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const requestData = {
      email: email,
      password: password,
    };
    const response = login(requestData);
    if (response) {
      onLogin();
      return navigate('/');
    }
  }

  return (
    <div style={{minHeight: '75vh'}}>
        <h1 className="d-flex justify-content-center mt-5 mb-5" style={{marginTop: '50px'}}>Please sign in</h1>
        <div className="container d-flex justify-content-center">
            <div className="login-container text-center mt-0" id="formLogin"  style={{maxWidth: '400px'}}>
                <div className="input-group mb-3">
                    <span className="input-group-text"> <i className="bi bi-person-badge"></i> </span>
                    <input type="email" name="email" className="form-control" placeholder="Email" required
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"> <i className="bi bi-key-fill"></i> </span>
                    <input type="password" name="password" className="form-control" placeholder="Password" required
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleLogin} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                    <div className="mt-3">
                        <p>Don't have an account? <a href="/login">Sign up</a></p>
                    </div>
            </div>
        </div>
        <NotificationContainer />
    </div>
  );
}

export default Login;