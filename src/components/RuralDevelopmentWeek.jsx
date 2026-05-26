import Slider from "react-slick"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import jayprakash from "../assets/images/avard-website/photos/shri-jaypraksh-narayan-optimized.jpg"
import kamladevi from "../assets/images/avard-website/photos/smt-kamladevi-chattopadhyay1-1-optimized.jpg"
import acSen from "../assets/images/avard-website/photos/shri-a-c-sen-optimized.jpg"
import dharampal from "../assets/images/avard-website/photos/shr-dharampal-optimized.jpg"
import anna from "../assets/images/avard-website/photos/shri-anna-sahasrbudhe.jpg"
import lcJain from "../assets/images/avard-website/photos/shri-l-c-jain.jpg"

const people = [
  {
    image: jayprakash,
    name: "Shri Jayaprakash Narayan",
    role: "People's movement leader",
    detail:
      "Remembered for inspiring voluntary action, community participation, and democratic grassroots development.",
  },
  {
    image: kamladevi,
    name: "Smt. Kamaladevi Chattopadhyay",
    role: "Social reformer",
    detail:
      "Associated with craft, cooperative action, women leadership, and dignified livelihoods for rural communities.",
  },
  {
    image: acSen,
    name: "Shri A. C. Sen",
    role: "Development thinker",
    detail:
      "Contributed to the spirit of organised voluntary work and rural development institution building.",
  },
  {
    image: dharampal,
    name: "Shri Dharampal",
    role: "Gandhian thinker",
    detail:
      "Known for work on indigenous knowledge, community institutions, and decentralised social development.",
  },
  {
    image: anna,
    name: "Shri Anna Sahasrabudhe",
    role: "Constructive worker",
    detail:
      "Part of the wider tradition of constructive rural work, social responsibility, and community self-reliance.",
  },
  {
    image: lcJain,
    name: "Shri L. C. Jain",
    role: "Rural development advocate",
    detail:
      "Associated with cooperative thinking, livelihood development, and strengthening people-centred institutions.",
  },
]

function GalleryArrow({ className, onClick, direction }) {
  return (
    <button className={`${className} rd-gallery-arrow rd-gallery-arrow-${direction}`} type="button" aria-label={`${direction === "left" ? "Previous" : "Next"} Rural Development Week card`} onClick={onClick}>
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  )
}

function RuralDevelopmentWeek() {
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
    prevArrow: <GalleryArrow direction="left" />,
    nextArrow: <GalleryArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="rd-week-section">
      <div className="container">
        <div className="section-heading rd-week-heading">
          <span>Rural Development Week 2025</span>
          <h2>Experience the transformation of Rural Development Week 2025</h2>
          <p>
            Hover over each old-site AVARD image to reveal the person details
            and the values that continue to guide rural development work.
          </p>
        </div>

        <div className="rd-week-gallery-shell" aria-label="Rural Development Week people gallery">
          <Slider className="rd-week-slider" {...settings}>
            {people.map((person, index) => (
              <div className="rd-week-slide" key={person.name}>
                <article className="rd-flip-card" data-aos="fade-up" data-aos-delay={index * 70} tabIndex="0">
                  <div className="rd-flip-inner">
                    <div className="rd-flip-front">
                      <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                      <div className="rd-front-caption">
                        <h3>{person.name}</h3>
                        <span>{person.role}</span>
                      </div>
                    </div>

                    <div className="rd-flip-back">
                      <span>{person.role}</span>
                      <h3>{person.name}</h3>
                      <p>{person.detail}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default RuralDevelopmentWeek
