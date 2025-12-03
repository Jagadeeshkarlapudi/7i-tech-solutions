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
import FullStackJava from './courses/FullStackJava.jsx';
import DigitalMarketing from './courses/DigitalMarketing.jsx';
import Design from './courses/Design.jsx';
import FrontReact from './courses/FrontReact.jsx';
import Angular from './courses/Angular.jsx';
import SpokenEnglish from './courses/SpokenEnglish.jsx';
import FullstackPHP from './courses/FullStackPHP.jsx';
import FullstackDOTNET from './courses/FullStackDOTNET.jsx';



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
  },
  {
    path:"full-stack-java",
    element:<FullStackJava/>
  },
  {
    path:"digital-marketing",
    element:<DigitalMarketing/>
  },
  {
    path:"ui-ux",
    element: <Design/>
  },
  {
    path:"react",
    element: <FrontReact/>
  },
  {
    path:"angular",
    element:<Angular/>
  },
  {
    path:"spoken-english",
    element:<SpokenEnglish/>
  },
  {
    path:"full-stack-php",
    element:<FullstackPHP/>
  },
  {
    path:"full-stack-dotnet",
    element:<FullstackDOTNET/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
