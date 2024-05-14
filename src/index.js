import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blogdetails from './pages/Blogdetails';
import Error from './pages/Error';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allroute=createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/About-us',
    element:<About />
  },
  {
    path:'Course',
    element:<Course />
  },
  {
    path:'Blog',
    element:<Blog />
  },
  {
    path:'Blog/:id',
    element:<Blogdetails />
  },
  {
    path:'*',
    element:<Error />
  },
])
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={allroute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
