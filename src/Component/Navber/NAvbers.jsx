/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Navber.css';
import iconimg from '../assests/img/WhatsApp Image 2024-10-22 at 15.05.12_64e819b8.jpg';
export class NAvbers extends Component {
  render() {
    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              <img src={iconimg} alt="Logo" className="navbar-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupport"
              aria-controls="navbarSupport"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupport">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">الرئيسية</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reserve">الحجز</Link>  {/* رابط الحجز */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/corses">الكورس</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default NAvbers
