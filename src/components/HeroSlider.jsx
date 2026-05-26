import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import banner1 from "../assets/images/banner-1-optimized.jpg"
import banner2 from "../assets/images/banner-2-optimized.jpg"
import banner3 from "../assets/images/banner-3-optimized.jpg"
import banner4 from "../assets/images/banner-4-optimized.jpg"
import banner5 from "../assets/images/banner-5-optimized.jpg"

const slides = [

{
image: banner1,
title: "Empowering Rural India",
text: "AVARD works for rural development and social empowerment across India.",
button: "Support Our Mission"
,
link: "/donate"
},

{
image: banner2,
title: "Strengthening Communities",
text: "Working with NGOs and communities to create sustainable livelihoods.",
button: "Explore Our Work"
,
link: "/projects"
},

{
image: banner3,
title: "66 Years of Social Impact",
text: "Promoting voluntary action and grassroots development.",
button: "Join Our Movement"
,
link: "/contact"
},

{
image: banner4,
title: "Women Empowerment",
text: "Supporting rural women leadership and self-help groups across India.",
button: "View Programs"
,
link: "/programs"
},

{
image: banner5,
title: "Education for Rural Children",
text: "Helping children in villages access better education opportunities.",
button: "Support Education"
,
link: "/donate"
}

]

function HeroSlider() {

const [current,setCurrent] = useState(0)

const goToSlide = (direction) => {
setCurrent((prev)=>(prev + direction + slides.length)%slides.length)
}

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent((prev)=>(prev+1)%slides.length)

},5000)

return ()=>clearInterval(interval)

},[])

return(

<section className="hero-slider">

{slides.map((slide,index)=>(

<div
key={index}
className={`slide ${index===current ? "active" : ""}`}
style={{backgroundImage:`url(${slide.image})`}}
>

<div className="hero-overlay">

<h1>{slide.title}</h1>

<p>{slide.text}</p>

<Link className="cta-btn" to={slide.link}>{slide.button}</Link>

</div>

</div>

))}

<button className="hero-arrow hero-arrow-left" type="button" aria-label="Previous banner" onClick={() => goToSlide(-1)}>
<FaChevronLeft />
</button>

<button className="hero-arrow hero-arrow-right" type="button" aria-label="Next banner" onClick={() => goToSlide(1)}>
<FaChevronRight />
</button>

<div className="hero-dots" aria-label="Banner navigation">
{slides.map((slide,index)=>(
<button
key={slide.title}
className={index===current ? "active" : ""}
type="button"
aria-label={`Show ${slide.title}`}
onClick={()=>setCurrent(index)}
/>
))}
</div>

</section>

)

}

export default HeroSlider
