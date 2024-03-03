import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';

// 1 - Importando o browser
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Error-page';

// 2 - Criando o Router
const router = createBrowserRouter([
  {
    path: '/',
    // 4 - Colocando a página root aqui
    element: <Root/>,
    // 6 - Colocando ErrorPage como errorElement
    errorElement: <ErrorPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3 - colocando o RouterProvider e o router aqui */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

