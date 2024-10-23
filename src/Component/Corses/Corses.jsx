import React, { Fragment } from 'react'
import NAvbers from '../Navber/NAvbers';
import Footer from '../Footer/Footer';
export default function Corses() {
    const phonenamber = '201551493084';
    const handleclick = ()=>{
      window.location.href = `https://wa.me/${phonenamber}`
  
    } 
    return (
<Fragment>
  <NAvbers />
  <br />
  <div className="reserve-page container">
    <div className="row">
      <div className="col-md-6">
        <img 
          src='https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/407608327_854808203098141_551062021573373452_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG_OMug35uooZAz5lCn7AZ6lUNLXi7Z9IOVQ0teLtn0gyMrbcRjyMFadFKhlOtGtNvlzUZjrkFboHZxWcb-tBIQ&_nc_ohc=youV3oxpnAsQ7kNvgF8xU1-&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=A0dv6ml59uk3BL-8qSLZLmb&oh=00_AYDE63U2MxAsr5BOUGo1-aNJBXao6-gpXMbZjCBbq58-ew&oe=671EF5D3' 
          alt="حجز الحجامة" 
          className="img-fluid" 
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h2>احجز الآن</h2>
        <p>
          محتاج تتعلم بشكل عملي إزاي تعمل حجامة و تفهم الإبر الصينية على أسس صحيحة ؟!
          <strong>#كورس الحجامة و الإبر الصينية - الدفعة الرابعة</strong> هو الكورس المتكامل اللي هتتعلم بعده كل اللي انت محتاجه بشكل عملي 👌
        </p>
        <h4>محتوى كورس الحجامة و الإبر الصينية:</h4>
        <ul>
          <li>هنتعرف على فوائد ونواهي الحجامة والإبر.</li>
          <li>هنتعرف على نقاط الحجامه والإبر على مسارات الطاقة وكيفية التعامل معاها.</li>
          <li>كيفية التشخيص وتحضير المريض ما قبل وبعد الحجامة والإبر.</li>
          <li>هتدرب بإيدك على الحجامة المتزحلقة 🌀 والنارية 🔥.</li>
          <li>هتدرب بإيدك على استخدامات الكؤوس الهوائية المختلفة.</li>
          <li>تدريب عملي على الحجامة الدموية والجافة.</li>
          <li>كيفية التعامل مع المكبس بأمان والتخلص من الأدوات بشكل آمن ♻.</li>
        </ul>
        <p>👈 بالإضافة إلى شهادة إتمام كورس الحجامة و كورس الإبر الصينية 🥰</p>
        <h2>السعر: 400EGP</h2>
        <button className="btn btn-primary" onClick={handleclick}>احجز الآن</button>
      </div>
    </div>
  </div>
  <br>
  </br>
  <Footer/>
</Fragment>
  )
}
