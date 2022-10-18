import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserEdit from './components/UserEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="edit" element={<UserEdit />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
