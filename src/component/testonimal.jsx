import React from 'react'
import Slider from './slider'

function Testonimal() {
    return (
        <>
       
         {/* <!-- Testimonial Start --> */}
    <div class="container-xxl pt-5">
        <div class="container">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                style={{maxWidth: "500px;"}}>
                <p class="fs-5 fw-medium text-primary">Testimonial</p>
                <h1 class="display-5 mb-5">What Clients Say About Our Services!</h1>
            </div>
            <Slider/>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
           
                <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-1.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
                <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-2.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
                <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-3.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
                <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="img/testimonial-4.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Testonimal
