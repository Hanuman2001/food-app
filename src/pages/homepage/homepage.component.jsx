
import React from "react"
import ImageSlider from "../../components/crousel/crousel.component"
import "./homepage.component.styles.css"
import Example from "../../components/card/card.component"

const pricing1="60 Rs."
const thali1="Basic"
const content1="4 Roti + Sabzi +Achaar"
const pricing2="75 Rs."
const thali2="Silver"
const content2="4 Roti + Sabzi +Dal+ Achaar"
const pricing3="100 Rs."
const thali3="Gold"
const content3="5 Roti + Sabzi +Dal+ Rice + Achaar + Papad"


const Homepage=()=>(
<div className="Homepage">
	<div className="imageslider">
		<ImageSlider  />
	</div>

<div className="component">
	<Example className="hold" pricing={pricing1} thali={thali1} content={content1} />	
	<Example className="hold" pricing={pricing2} thali={thali2} content={content2}  />	
	<Example className="hold" pricing={pricing3} thali={thali3} content={content3} />	
</div>	
	
</div>)


export default Homepage;