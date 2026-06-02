import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import banner1 from "../assets/images/hero-kartavya-path-tubewell.jpg"
import banner2 from "../assets/images/banner-2-optimized.jpg"
import banner3 from "../assets/images/banner-3-optimized.jpg"
import banner4 from "../assets/images/banner-4-optimized.jpg"
import educationBanner from "../assets/images/hero-gyan-path-education.jpg"
import animalFarmingBanner from "../assets/images/hero-animal-farming.jpg"
import sportsBanner from "../assets/images/hero-rural-sports.jpg"

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
image: educationBanner,
title: "Education for Rural Children",
text: "Guiding children toward learning, confidence, and opportunity through Gyan Path.",
button: "Support Education"
,
link: "/donate"
},

{
image: animalFarmingBanner,
title: "Animal Farming Society",
text: "Supporting rural families with livestock-based livelihood, training, and community enterprise.",
button: "View Programs"
,
link: "/programs"
},

{
image: sportsBanner,
title: "Sports for Rural Youth",
text: "Encouraging teamwork, health, discipline, and confidence among children and young people.",
button: "Join Activities"
,
link: "/membership"
}

]

function HeroSlider() {

const [current,setCurrent] = useState(0)
const slide = slides[current]

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent((prev)=>(prev+1)%slides.length)

},8000)

return ()=>clearInterval(interval)

},[])

return(

<section className="hero-slider" aria-roledescription="carousel" aria-label="AVARD featured programs">

<div
key={slide.title}
className="slide active"
aria-live="polite"
>

<img
className="slide-image"
src={slide.image}
alt=""
loading={current === 0 ? "eager" : "lazy"}
fetchPriority={current === 0 ? "high" : "auto"}
decoding={current === 0 ? "sync" : "async"}
/>

<div className="hero-overlay">

<h1>{slide.title}</h1>

<p>{slide.text}</p>

<Link className="cta-btn" to={slide.link}>{slide.button}</Link>

</div>

</div>

<div className="hero-dots" aria-label="Banner navigation">
{slides.map((slide,index)=>(
<button
key={slide.title}
className={index===current ? "active" : ""}
type="button"
aria-label={`Show ${slide.title}`}
aria-pressed={index===current}
onClick={()=>setCurrent(index)}
/>
))}
</div>

</section>

)

}

export default HeroSlider
