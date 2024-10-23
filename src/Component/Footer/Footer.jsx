/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <Fragment>
    <footer className="page-footer">
      <div className="container">
        <div className="row px-md-3">
          <div className="col-sm-6 col-lg-3 py-3">
            <h5>الشركة</h5>
            <ul className="footer-menu">
              <li><a href="#">من نحن</a></li>
              <li><a href="#">الوظائف</a></li>
              <li><a href="#">فريق التحرير</a></li>
              <li><a href="#">الحماية</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 py-3">
            <h5>المزيد</h5>
            <ul className="footer-menu">
              <li><a href="#">الشروط والأحكام</a></li>
              <li><a href="#">الخصوصية</a></li>
              <li><a href="#">الإعلانات</a></li>
              <li><a href="#">انضم كطبيب</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 py-3">
            <h5>شركاؤنا</h5>
            <ul className="footer-menu">
              <li><a href="#">One-Fitness</a></li>
              <li><a href="#">One-Drugs</a></li>
              <li><a href="#">One-Live</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 py-3">
            <h5>اتصل بنا</h5>
            <p className="footer-link mt-2"> 
            العنوان: ميدان الف مسكن جسر السويس أمام محطة مترو الف مسكن, Cairo, Egypt</p>
            <h3 href="#" className="footer-link">01006863621</h3>
            <h3 href="#" className="footer-link">sohailwagdy@gmail.com</h3>

            <h5 className="mt-3">وسائل التواصل الاجتماعي</h5>
            <div className="footer-sosmed mt-3">
              <a href="https://www.facebook.com/bialhijama?mibextid=ZbWKwL" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-google-plus"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr />

        <p id="copyright">حقوق النشر &copy; 2020 <a href="https://macodeid.com/" target="_blank">MACode ID</a>. جميع الحقوق محفوظة</p>
      </div>
    </footer>

   
  </Fragment>

  )
}
