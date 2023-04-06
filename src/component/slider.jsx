import React from 'react'
import Slider from "react-slick";
export default function jSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };


        // import React from "react";
        // import Slider from "react-slick";
        
    
          return (
            <Slider {...settings}>
              <div>
              <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-1.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
              </div>
              <div>
              <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-2.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
              </div>
              <div>
              <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="/img/testimonial-3.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
              </div>
              <div>
              <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                    <img class="mb-4" src="img/testimonial-4.jpg" alt=""/>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit, sed stet lorem sit clita duo justo</p>
                    <h5>Client Name</h5>
                    <span class="text-primary">Profession</span>
                </div>
              </div>
             
            </Slider>
          );
        }   
    


// export default Slider
