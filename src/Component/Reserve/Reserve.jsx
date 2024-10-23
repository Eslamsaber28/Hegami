import React, { Fragment } from 'react'
import bookingImage from '../assests/img/bg-doctor.png'
import NAvbers from '../Navber/NAvbers'
import Footer from '../Footer/Footer';
export default function Reserve() {
  const phonenamber = '201551493084';
  const handleclick = ()=>{
    window.location.href = `https://wa.me/${phonenamber}`

  } 
  return (
       <Fragment>
    <NAvbers/>
    <br></br>
    <div className="reserve-page container">
  <div className="row">
    <div className="col-md-6">
      <img src={bookingImage} alt="حجز الحجامة" className="img-fluid w-75" />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center">
      <h2>احجز الآن</h2>
      <p>محتاج تحافظ على صحتك وتكون نشيط؟ 🥱 الحجامة النبوية هتجدد نشاطك من تاني 💪</p>
      <h4>نذكركم بأيام الحجامة النبوية لهذا الشهر 🌹</h4>
      <ul>
        <li>الأربعاء 17 === 21 أغسطس</li>
        <li>الجمعة 19 === 25 أغسطس</li>
        <li>الأحد 21 === 27 أغسطس</li>
      </ul>
      <h4>أفضل أيام الحجامة ✨</h4>
      <p>العرض الأكثر طلباً 🔥👇</p>
      <h5>الجلسة داخل العرض تشمل:</h5>
      <ul>
        <li>حجامة تشريطية - 20 كأس 💪</li>
        <li>حجامة متزحلقة 👍</li>
        <li>حجامة نارية 🔥</li>
        <li>حجامة سيليكون 🌀</li>
        <li>مساج بالجهاز 🕹</li>
        <li>حجامة مغناطيسية</li>
        <li>مساج بالأدوات الخشبية</li>
      </ul>
      <h2>السعر: 400EGP</h2>
      <button className="btn btn-primary" onClick={handleclick}>احجز الآن</button>

    </div>
  </div>
</div>
<br></br>
<Footer/>
  </Fragment>
  )
}


