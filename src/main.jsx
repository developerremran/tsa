import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './Component/Statistics/Statistics'
import SingleFeatureJob from './Component/FeaturedJobs/SingleFeatureJob'
import AppliedJob from './Component/AppliedJob'
import productsAndCartData from './Component/Uilts/cartSetLoader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  
    children:[
      {
        path:'/',
        element:<Statistics></Statistics>,
        loader: ()=>fetch('jobdata.json')
      },
      {
        path:'Statistics/:jobId',
        element:<SingleFeatureJob></SingleFeatureJob>,
        // loader: ({params}) => fetch(`jobdata.json/${params.jobId}`)
      },
      {
        path:'/applied-jobs',
        element:<AppliedJob></AppliedJob>,
        loader:productsAndCartData
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
