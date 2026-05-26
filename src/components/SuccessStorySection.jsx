import React from "react";
import "../styles/SuccessStorySection.css";

// import icons
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import icon7 from "../assets/icons/7.png";
import icon8 from "../assets/icons/8.png";
import icon9 from "../assets/icons/9.png";

import ctaImg from "../assets/images/img-2025/job-seeker-blue-cta-img.png";

function SuccessStorySection() {

  const stats = [
    { icon: icon1, number: "23", text: "States in India" },
    { icon: icon2, number: "341", text: "AVARD Members" },
    { icon: icon3, number: "21", text: "Active Projects" },
    { icon: icon4, number: "20", text: "Executive Committee Members" },
    { icon: icon5, number: "12+", text: "Globalization Work" },
    { icon: icon6, number: "382+", text: "Happy Donators" },
    { icon: icon7, number: "127+", text: "Success Mission" },
    { icon: icon8, number: "509+", text: "Volunteer Reached" },
    { icon: icon9, number: "300+", text: "Positive Feedback" },
  ];

  return (
    <section className="success-story-wrapper">
      <div className="container">

        <div className="success-story-content">

          {/* Heading */}
          <div className="highlight-text" data-aos="fade-up">
            <span className="section-eyebrow">66 Years. One Vision.</span>
            <h2>A Million Success Stories</h2>
          </div>

          {/* Stats Grid */}
          <div className="stats-container">
            {stats.map((item, index) => (
              <div className="stat-box" data-aos="fade-up" 
  data-aos-delay={index * 100} key={index}>
                <div className="stat-box-left">
                  <img src={item.icon} alt="icon" loading="lazy" decoding="async" />
                </div>
                <div className="stat-box-right">
                  <h3>{item.number}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Image */}
          <div className="cta-image" data-aos="zoom-in">
            <img src={ctaImg} alt="AVARD rural livelihoods support" loading="lazy" decoding="async" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default SuccessStorySection;
