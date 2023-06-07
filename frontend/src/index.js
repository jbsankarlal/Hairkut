import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextProvider } from '../src/context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminAuthContextProvider } from './context/AdminAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AdminAuthContextProvider>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </AuthContextProvider>
    </AdminAuthContextProvider>
      <ToastContainer/>
  </>
);


