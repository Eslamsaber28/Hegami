import React from 'react'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Reserve from './Component/Reserve/Reserve'
import Home from './Component/Home/Home'
import Corses from './Component/Corses/Corses'
import Doctors from './Component/Doctors/Doctors'
import Works from './Component/DoctorsWork/Works'
export default function App() {
  let route = createHashRouter([
    {path:'',element:<Layout/>,children:[
      {path:'/',element:<Home/>},
      {path:'reserve',element:<Reserve/>},
      {path:'corses',element:<Corses/>},
      {path:'doctor',element:<Doctors/>},
      {path:'work',element:<Works/>},
      
    ]}
  ])
  return (
    <RouterProvider router={route}/>
  )
}

