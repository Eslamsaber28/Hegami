/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import '../Doctors/HEalthsection.css'

export default function Doctors() {
  return (
  <Fragment>
      <div className="page-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 fade-in-up">
            <h1 className="section-title">Welcome to Your Health Center</h1>
            <p className="text-grey mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!
            </p>
            <a  className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6 fade-in-right" data-wow-delay="400ms">
            <div className="img-place custom-img-1">
              <img src={require("../assests/img/bg-doctor.png")} alt="Doctor" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
}


