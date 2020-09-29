import React from "react"
import Carousel  from 'react-bootstrap/Carousel'
import "./crousel.component.styles.css"
import logo1 from "../../assets/Roti-Chapati-Bread.jpg"
import logo2 from "../../assets/dal.jpg"
const ImageSlider=()=>(


<Carousel >

  <Carousel.Item interval={1000}>

      <img
         className="d-block w-70"
       style={{'height':"300px"}}
      src={logo1}
      alt="First slide"
    />
  
    <Carousel.Caption>
      <h3>Quality</h3>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
        className="d-block w-70"
        style={{'height':"300px"}}
      src="https://www.harighotra.co.uk/images/recipes/Oct16/veg_biryani_landscape.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Trust</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-70"
      style={{'height':"300px"}}
      src={logo2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Value For Money</h3>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)

export default ImageSlider;