import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Homepage from './Homepage.jsx';
// import FullstackPython from './FullstackPython.jsx';
import { Contact } from 'lucide-react';
import Homepage from './pages/Homepage.jsx';
import FullstackPython from './courses/FullstackPython.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Softskills from './pages/Softskills.jsx';
import Contactpage from './pages/Contactpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path:"full-stack-python",
    element:<FullstackPython/>
  },
  {
    path:"gallery",
    element:<Gallery/>
  },
  {
    path:"aboutus",
    element:<About/>
  },
  {
    path:"softskills",
    element:<Softskills/>
  },
  {
    path:"contact",
    element:<Contactpage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
