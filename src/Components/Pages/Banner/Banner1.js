import React from 'react';
import b1 from '../../images/bc3.jpg';
import c1 from '../../images/blooddrop.svg';
import c2 from '../../images/bloodbag.svg';
import c3 from '../../images/glass.svg';
import c4 from '../../images/pointer.svg';
// import "./Banner1.css";
// import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "./Banner1.css";
import Banner2 from './Banner2';
// SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const Banner1 = () => {
    return (
        <div>
             {/* <div className="main-swiper">
                <Swiper
                    spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 3500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper">
                    <SwiperSlide>
                        <img style={{height:'35rem'}} className='img-fluid w-100' src={b2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:'35rem'}} className='img-fluid w-100' src={b3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{height:'35rem'}} className='img-fluid w-100' src={b4} alt="" />
                    </SwiperSlide>
                    </Swiper>
            </div> */}
        <div className='overflow-hidden'>
          <div className="row flex-row-reverse bg-danger">
          <div className='col-md-6 banner1'>
                  <div className=''>
                  <img className='img-fluid' src={b1} alt="" />
                  </div>
                  <div className='b1top'>
                      <button className='btn btn-outline-dark'>Register</button>
                  </div>
               </div>
              <div style={{backgroundColor:"#5E0024"}} className='col-md-6 text-light p-5'>
                  <h1>Blood donors</h1>
                  <h1>needed now</h1>
                  <p>We're calling on at least 3,200 people, especially if you have O+, O-, A+ and A- blood types, to roll up your sleeves and give blood this week.</p>
                  <button className='btn btn-outline-light'>Need Donor?</button>
              </div>
              
          </div>
        </div>
        <div className='row row-cols-2 row-cols-md-4 mx-auto overflow-hidden'>
            <div className='col text-center'>
                <div className='m-3'>
                    <img className='p-4 rounded-circle bg-blood-cover' src={c1} alt="" />
                </div>
                <div>
                    <p>Can I give blood?</p>
                </div>
            </div>
            <div className='col text-center'>
                <div className='m-3'>
                    <img className='p-4 rounded-circle bg-blood-cover' src={c2} alt="" />
                </div>
                <div>
                    <p>How to give</p>
                </div>
            </div>
            <div className='col text-center'>
                <div className='m-3'>
                    <img className='p-4 rounded-circle bg-blood-cover' src={c3} alt="" />
                </div>
                <div>
                    <p>Prepare and after care</p>
                </div>
            </div>
            <div className='col text-center'>
                <div className='m-3'>
                    <img className='p-4 rounded-circle bg-blood-cover' src={c4} alt="" />
                </div>
                <div>
                    <p>Find a donor center</p>
                </div>
            </div>
        </div>
        <Banner2/>
    </div>
    );
};

export default Banner1;