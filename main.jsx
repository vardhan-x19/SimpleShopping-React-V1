import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Router/App.jsx'
import './index.css'
import {createBrowserRouter} from  'react-router-dom';
import HomeItem from './Router/HomeItem.jsx';
import Bag from './Router/Bag.jsx';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';
const router= createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children :[
      {
        path:"/",
        element:<HomeItem/>
      },
      {
        path:"/bag",
        element:<Bag/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
