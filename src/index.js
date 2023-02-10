import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from "./contexts/BudgetsContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
    <Navbar />
    <br/>
    <App />
    </BudgetsProvider>
  </React.StrictMode>
);
