
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Benfict.css';
export default function Benfict() {
  return (
    <Fragment>
    <div className="container benfict-container">
      <div className="row">
        <div className="col-md-12">
          <h1 className='text-center title'>الحجامة</h1>
        </div>
      
        <div className='col-md-6 benefits'>
          <h2>فوائد الحجامة</h2>
          <ul>
            <li>تحسين أداء أعضاء الجسم.</li>
            <li>تحسين صحة الجهاز المناعي.</li>
            <li>تنشيط الدورة الدموية في الجسم.</li>
            <li>علاج الصداع والصداع النصفي.</li>
            <li>التخفيف من السعال وضيق التنفس.</li>
            <li>زيادة نسبة التركيز وتحسين صحة الذاكرة.</li>
            <li>تهدئة الأعصاب وتخفيف آلام الرقبة والكتف.</li>
          </ul>
          <h3 className='conf text-center'>للحجز <span><Link to={'/reserve'}>اضغط هنا</Link></span></h3>
      
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-4'>
              <img 
                src="https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/258401538_446206817012968_1175108163066347271_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH75hsWjwvwgqV_FBb_u6hzKN-ZAqPk9p8o35kCo-T2n5RZqavuKTFKNv132uomF42XXvlg2ULYFrwZAgKXow32&_nc_ohc=yihVa2FaxJoQ7kNvgEWaso0&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=AY3SsWMRjkZk2TSkzUMSvFM&oh=00_AYDgxeZcXW_mxUAsFEneFwvCIZvhAFiKP8Y4STxoxNy-rg&oe=671D65D5" 
                alt="حجامة 1"
                className="img-fluid m-2" 
              />
            </div>
            <div className='col-md-4 '>
                <div className='card'>
              <img 
                src="https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/276120786_521798752787107_3870135596963263880_n.png?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmqBdR_xHqbKOjURnn9ZBiCULd9Rmr-PUJQt31Gav49ZRQ3jdoc9oABjchl1GvyZITszyrW8kxxaHZbuAYsrCr&_nc_ohc=U8kHIMuBH5oQ7kNvgGZA8q6&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=AhUJ3xASuIGQAednROPcD-X&oh=00_AYBLMQCfPRVukGQPNk6jXkIlhzsg-VDDcq0Jl3l1GBotfw&oe=671D6E92" 
                alt="حجامة 2"
                className="img-fluid m-2 image-box " 
              />
            </div>
            </div>
            <div className='col-md-4 card'>
              <img 
                src="https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/343460969_1323431258214441_5740669554330418725_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGPtRCUE4MftBY9roD9BMP2ajHCcsUcq6NqMcJyxRyrozgX9lLPIl8CP2Pspcdzdk74TXoaPek6tpNveosFKZcy&_nc_ohc=GxQ_YWr-IyoQ7kNvgFkdaOJ&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=AJhMRyQ07IOMEmH9vVtcCUE&oh=00_AYAPt0MW23x0omvwZjv4O_zzVngFpeK6z-Y0iahEAdGseQ&oe=671D7ED8" 
                alt="حجامة 2"
                className="img-fluid m-2 image-box " 
              />
            </div>
            <div className='col-md-4 card'>
              <img 
                src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/440091141_873802684759475_6699012386160377025_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHjU2IziC4Gjx2axv48zpdIaGbuOTT8D8toZu45NPwPy87ktxI_5hgAURGZonpXqcn-7ulPkqM7arGo_ilhFsRe&_nc_ohc=ssr1f9vAHtEQ7kNvgGvXaWz&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=AFHDlCzyJkm8GE91w-2jcki&oh=00_AYCirQpWsHIllNqC1fQeLPz941PklsIomXt1-KOqCKrZvQ&oe=671D885C"
                alt="حجامة 2"
                className="img-fluid m-2 image-box " 
              />
            </div>
            <div className='col-md-4 card'>
              <img 
                src="https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/447051836_902085771931166_8459819965289969702_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHaD7Hh7uULEgrgg2zx2qg3MCggpB03CdkwKCCkHTcJ2VLiEnnjTr0E0VzkD4zUBA1yacyo02JY0AnJZTA7ahLN&_nc_ohc=JwhRkx6L1bYQ7kNvgFZJqC8&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=Aj10xAzzOVPmbLIfh08M0FW&oh=00_AYAn8rVNEKNym45o_K7SlSd-V0n_aX7jmNkkn34F3hRijw&oe=671D80E5" 
                alt="حجامة 2"
                className="img-fluid m-2 image-box " 
              />
            </div>
            <div className='col-md-4 card'>
              <img 
                src="https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/460650926_974321451374264_2642551556424956228_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGP5IUd5SRWCCviCTFiYLeJsLUNjg4ldhqwtQ2ODiV2Gpqq6G1g_15WYC3VN_Akabn65X5671cv1A8zTkVPvm4v&_nc_ohc=_e_YhNKvW5oQ7kNvgHNaurh&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=AQTr9u4M5dWcLTGUMMTR44V&oh=00_AYC3MGJK40jfcDG63swp4I47n-9_oSlLg3HCpydRSc3v0g&oe=671D7A4C" 
                alt="حجامة 2"
                className="img-fluid m-2 image-box " 
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  </Fragment>
  )
}
