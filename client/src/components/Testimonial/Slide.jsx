import React, { Component } from "react"
import Slider from "react-slick"
import SlideCard from './Slide-card'


import './css/slide.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import icon_right from '../../assets/Group 4SVG.svg'
import img_1 from './images/image 3.svg'
import img_2 from './images/image 4.svg' 
import img_3 from './images/image 5.svg'


const Name = [
    'Isabela Souza', 'Outra pessoa'
]

const Func = [
	'Candidata a vereadora', 'Outra função'
]

export default class Slide extends React.Component{

render(){
	 const settings = {
      className: "",
      centerMode: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      infinite: true,
      centerPadding: "60px",
      adaptiveHeight: false,
      speed: 500
    }
return(
<div className="nav-galeria" >
<div  className="icon_right">
<img src={icon_right} />
</div>
	<Slider  {...settings}>
	<SlideCard 

	
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


	/>
	<SlideCard 

	
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


	/>
	<SlideCard 

	
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


	/>
	<SlideCard 

	
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


	/>
    <SlideCard 

  
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


  />
    <SlideCard 

  
      NameofClient={Name[0]}
      FuncofClient={Func[0]}


  />
	</ Slider>

</div>
)
}
}
