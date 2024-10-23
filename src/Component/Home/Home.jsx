import React, { Fragment } from 'react'
import NAvbers from '../Navber/NAvbers'
import About from '../About/About'
import '../Home/Home.css'
import Benfict from '../Benfict/Benfict'
import Doctors from '../Doctors/Doctors'
import Footer from '../Footer/Footer'
export default function Home() {
  return (
    <Fragment>
        <NAvbers/>
        <About/>
        <br></br>
        <Doctors/>
        <br></br>
        <br></br>
        <Benfict/>
        <br></br>
        <br></br>
        <Footer/>
    </Fragment>
  )
}
