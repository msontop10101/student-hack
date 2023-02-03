import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/auth/auth';
import { SignUpProvider } from "./context/auth/signup"
import posthog from 'posthog-js'; // new

posthog.init('phc_3gMGBSb1vGSnYDV0Y6kKOTG5sD9uKa9RUtfEnLamQBf', { api_host: 'https://app.posthog.com' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SignUpProvider>
        <Router>
          <App />
        </Router>
      </SignUpProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
