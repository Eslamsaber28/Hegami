/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react"
import React  from 'react'
import imags from "../assests/img/bg_image_1.jpg"
import { Link } from "react-router-dom"
export default function About() {
  return (
    <Fragment>
    <div class="page-hero bg-image overlay-dark" style={{backgroundImage: `url(${imags})`, height:570 } }>
<div class="hero-section">
 <div class="container text-center wow zoomIn">
   <span class="subhead">دعونا نجعل حياتك أكثر سعادة</span>
   <h1 class="display-4">حياة صحية</h1>
   <a href="" class="btn btn-primary">دعونا نتشاور</a>
 </div>
</div>
</div>
 </Fragment>
  )
}
