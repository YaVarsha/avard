import React from "react";
import Slider from "react-slick";
import "../styles/CurtainRaiser.css";

// import images
import img1 from "../assets/images/CurtainRaiser-img/1-optimized.jpg";
import img2 from "../assets/images/CurtainRaiser-img/2.jpg";
import img3 from "../assets/images/CurtainRaiser-img/3-optimized.jpg";
import img4 from "../assets/images/CurtainRaiser-img/4-optimized.jpg";
import img5 from "../assets/images/CurtainRaiser-img/5-optimized.jpg";
import img6 from "../assets/images/CurtainRaiser-img/6.jpg";
import img7 from "../assets/images/CurtainRaiser-img/7.jpg";
import img8 from "../assets/images/CurtainRaiser-img/8-optimized.jpg";
import img9 from "../assets/images/CurtainRaiser-img/9.jpg";
import img10 from "../assets/images/CurtainRaiser-img/10.jpg";

function CurtainRaiser() {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3200,
  pauseOnHover: true,
  arrows: true,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

  return (
    <section className="curtain-raiser-wrapper">
      <div className="container">

        <div className="curtain-header">
            <h2 className="curtain-heading" data-aos="fade-up">
              <span className="section-eyebrow">Curtain Raiser for</span>
              Rural Development Since 1958
            </h2>
        </div>

        <div className="slider-wrapper" data-aos="fade-up">

          <Slider {...settings}>
            {images.map((img, index) => (
              <div className="card-curtain" key={index}>
                <img src={img} alt={`AVARD rural development activity ${index + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </Slider>

        </div>

      </div>
    </section>
  );
}

export default CurtainRaiser;
