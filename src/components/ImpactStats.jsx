import { motion } from "framer-motion"

const MotionDiv = motion.div

const stats = [

{ number: "23+", label: "States" },
{ number: "300+", label: "Member NGOs" },
{ number: "50+", label: "Projects" },
{ number: "1M+", label: "Lives Impacted" }

]

function ImpactStats(){

return(

<section className="impact-section">

<div className="container">

<h2 className="section-title">Our Impact</h2>

<div className="stats">

{stats.map((item, i) => (

<MotionDiv
className="stat-card"
key={i}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: i * 0.2 }}
viewport={{ once: true }}
>

<h2>{item.number}</h2>
<p>{item.label}</p>

</MotionDiv>

))}

</div>

</div>

</section>

)

}

export default ImpactStats
