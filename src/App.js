
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Countries from './componets/Countries/Countries';
import Favourite from './componets/Favourite/Favourite';
import Home from './componets/Home/Home';
import Main from './layout/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/countries',
          element: <Countries></Countries>
        },
        {
          path: '/favourite',
          element: <Favourite></Favourite>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <h1>Sorry path not defined</h1>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
