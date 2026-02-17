import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/mainLayout';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import CoffeeDetails from './components/CoffeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        loader: ()=> fetch('http://localhost:5000/coffees'),
        Component:Home
      },
      {
        path:'addCoffee',
        Component: AddCoffee
      },
      {
        path:'coffees/:id',
        loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>,
)
